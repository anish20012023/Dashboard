import { DataGrid } from "@mui/x-data-grid";
import { useStyles } from "./User.styles";
import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GridDataToolbar from "./GridDataToolbar";
import UserGridProfile from "./EditBtn";
import EditBtn from "./EditBtn";

const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "image",
    headerName: "Profile",

    renderCell: (params) => <Avatar src={params.row.image} />,
    sortable: false,
    filterable: false,
  },
  { field: "firstname", headerName: "First Name", width: 150 },
  { field: "lastname", headerName: "Last Name", width: 150 },

  { field: "age", headerName: "age" },
  { field: "gender", headerName: "Gender" },
  { field: "email", headerName: "Email ID", width: 180 },
  { field: "phone", headerName: "Phone", width: 150 },
  {
    field: "birthdate",
    headerName: "Birthdate",
    width: 150,
    renderCell: (params) => new Date(params.row.birthdate).toLocaleDateString(),
  },

  {
    field: "userAdress",
    headerName: "Address",
    width: 300,
    renderCell: (params) => formatAddress(params.row.userAdress),
  },
  { field: "department", headerName: "Department", width: 150 },
  { field: "post", headerName: "Post", width: 150 },
  {
    field: "status",
    headerName: "Status",
    width: 80,
    renderCell: (params) => (
      <>
        <Tooltip title={params.value ? "Active" : "Inactive"} arrow>
          <FiberManualRecordIcon sx={{ color: params.value ? "green" : "red" }} />
        </Tooltip>
      </>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    sortable: false,
    filterable: false,
    renderCell: (params) => <EditBtn params={params} />,
    hideable: false,
  },
];
function formatAddress(val) {
  const { address, city, state, postalCode } = val;
  return `${address}, ${city}, ${state} ${postalCode}`;
}

// User Component
function User() {
  const classes = useStyles();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error(` HTTP error Status: ${response.status}`);
        }
        const data = await response.json();
        const newData = data.users.map((user) => ({
          id: user.id,
          firstname: user.firstName,
          lastname: user.lastName,
          age: user.age,
          gender: user.gender,
          email: user.email,
          phone: user.phone,
          image: user.image,
          status: Math.random() < 0.5,
          birthdate: user.birthDate,
          userAdress: user.address,
          department: user.company.department,
          post: user.company.title,
        }));
        setTimeout(() => {
          setUserData(newData);
          setLoading(false);
        }, 600);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <Box component={"main"} className={classes.root}>
      <Typography variant="h5">Manage Users</Typography>
      <Box className={classes.dataGridMain}>
        <DataGrid
          className={classes.dataGrid}
          autoHeight
          checkboxSelection
          loading={loading}
          rows={userData}
          columns={columns}
          
          components={{
            toolbar: GridDataToolbar,
          }}
          initialState={{
            pagination: { paginationModel: { pageSize: 8 } },
          }}
          pageSizeOptions={[8, 16, 24]}
        />
      </Box>
    </Box>
  );
}

export default User;
