import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Register() {
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    postcode: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const addCustomer = () => {
    handleSave(customer);
    handleClose();
  };

  const handleSave = (customer) => {
    fetch("...........................................", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(console.log(res.statusText));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={handleClickOpen}
        style={{ marginBottom: "10px", width: "100%" }}
      >
        Rekisteröidy
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Uusi asiaks</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            name="firstname"
            value={customer.firstname}
            onChange={(e) => handleInputChange(e)}
            label="Etunimi"
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="lastname"
            value={customer.lastname}
            onChange={(e) => handleInputChange(e)}
            label="Sukunimi"
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="address"
            value={customer.address}
            onChange={(e) => handleInputChange(e)}
            label="Osoite"
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="postcode"
            value={customer.postcode}
            onChange={(e) => handleInputChange(e)}
            label="Postinumero"
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            name="Sähköposti"
            value={customer.email}
            onChange={(e) => handleInputChange(e)}
            label="Email"
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="phone"
            value={customer.phone}
            onChange={(e) => handleInputChange(e)}
            label="Puhelinnro"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addCustomer}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Register;
