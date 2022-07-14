import { useState, useEffect } from "react";
import configInfo from "./config/config";
import Search from "./Components/Search";
import Table from "./Components/Table";
import PaginationUtility from "./Utilities/PaginationUtility";
import "./App.css";
import DeleteSelected from "./Utilities/DeleteSelected";
/* eslint-disable */



function App() {
  const [usersData, setUsersData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [selected, setSelected] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [detailsPerPage] = useState(configInfo.ROW_COUNT);
  const [editedData, setEditedData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      const response = await fetch(configInfo.BASE_URL);
      const data = await response.json();
      setUsersData(data);
      setSearchData(data);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again");
      throw new Error(error);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") {
      setUsersData(searchData);
    } else {
      const searchResult = searchData.filter(
        (data) =>
          data.name.toLowerCase().includes(searchTerm) ||
          data.email.toLowerCase().includes(searchTerm) ||
          data.role.toLowerCase().includes(searchTerm)
      );
      setUsersData(searchResult);
    }
  };


  // Table functionality - start

  // Checkbox functionality - start
  const handleCheckAll = (event) => {
    const selectedIds = currentDetails.map(user => user.id)
    const selectedUsers = usersData.map(user => {
      if (selectedIds.includes(user.id)) {
        user.isChecked = event.target.checked
        return user
      }
      return user
    })
    setIsChecked(selectedIds)
    setUsersData(selectedUsers)
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelected(true)
      setIsChecked([...isChecked, value]);
    } else {
      setSelected(false)
      setIsChecked(isChecked.filter((item) => item !== value));
    }
  };
  // Checkbox functionality - end

  // Delete functionality - start
  const onDeleteClick = (userId) => {
    const deleteData = [...usersData];
    const remainingData = deleteData.filter((user) => userId !== user.id);
    setUsersData(remainingData);
  };

  const handleDeleteSelected = () => {
    const deleteSelectedData = [...usersData];
    const remainingData = deleteSelectedData.filter(
      (item) => !isChecked.includes(item.id)
    );
    console.log(remainingData);
    setUsersData(remainingData);
  };
  // Delete functionality - end

  // Actions functionality - start
  const onEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);
    const tableData = {
      name: user.name,
      email: user.email,
      role: user.role,
    };
    setEditedData(tableData);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newData = { ...editedData };
    newData[name] = value;
    setEditedData(newData);
  };

  const onSaveClick = (event) => {
    event.preventDefault();
    const savedData = {
      id: editUserId,
      name: editedData.name,
      email: editedData.email,
      role: editedData.role,
    };
    const newData = [...usersData];
    const index = usersData.findIndex((user) => user.id == editUserId);
    newData[index] = savedData;
    setUsersData(newData);
    setEditUserId(null);
  };

  const onCancelClick = () => {
    setEditUserId(null);
  };
  // Actions functionality - end

  // Table functionality - end


  // Pagination functionality - start
  const indexOfLastPage = currentPage * detailsPerPage;
  const indexOfFirstPage = indexOfLastPage - detailsPerPage;
  const currentDetails = usersData.slice(indexOfFirstPage, indexOfLastPage);
  const paginatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => (
    currentPage === 1
      ? null
      : setCurrentPage(currentPage - 1)
  )

  const nextPage = () => (
    currentPage === Math.ceil(usersData.length / detailsPerPage)
      ? null
      : setCurrentPage(currentPage + 1)
  )
  // Pagination functionality - end

  return (
    <div className="App">
      {errorMsg && <h4 style={{ color: "#BF3325" }}>{errorMsg}</h4>}
      <Search handleSearch={handleSearch} />
      <Table
        usersData={currentDetails}
        selected={selected}
        editUserId={editUserId}
        editedData={editedData}
        onEditClick={onEditClick}
        handleEdit={handleEdit}
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        onDeleteClick={onDeleteClick}
        handleCheckAll={handleCheckAll}
        handleCheckboxChange={handleCheckboxChange}
      />
      <DeleteSelected handleDeleteSelected={handleDeleteSelected} />
      <PaginationUtility
        totalDetails={usersData.length}
        detailsPerPage={detailsPerPage}
        paginatePage={paginatePage}
        firstPage={() => setCurrentPage(1)}
        prevPage={() => prevPage()}
        nextPage={() => nextPage()}
        lastPage={() => setCurrentPage(Math.ceil(usersData.length / detailsPerPage))}
      />
    </div>
  );
}

export default App;
