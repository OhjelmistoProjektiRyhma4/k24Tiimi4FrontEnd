import { useState, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";

export default function ProductList() {
  const [product, setProduct] = useState([
    {
      name: "",
      color: "",
      size: "",
      price: "",
      manufacturer: "",
      stock: "",
    },
  ]);

  const [colDef, setColDef] = useState([
    {
      headerName: "Nimi",
      field: "name",
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
    {
      headerName: "Väri",
      field: "color",
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
    {
      headerName: "Koko",
      field: "size",
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
    {
      headerName: "Hinta",
      field: "price", valueFormatter: p => p.value + ' €',
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
    {
      headerName: "määrä",
      field: "stock",
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
    {
      headerName: "Valmistaja",
      field: "manufacturer.name",
      filter: true,
      floatingFilter: true,
      flex: 1,
    },
  ]);

  useEffect(() => {
    const fetchProducts = () => {
      fetch(`http://localhost:8080/dogproducts`)
        .then((res) => {
          if (!res.ok) {
            throw Error(console.log(res.statusText));
          }
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((err) => console.log(err));
    };
    fetchProducts();
  }, []);

  console.log();

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ width: 1000, height: 500, textAlign: "left" }}
    >
      <AgGridReact rowData={product} columnDefs={colDef}></AgGridReact>
    </div>
  );
}
