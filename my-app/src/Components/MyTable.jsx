import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useData } from "../MyContext/Context";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name (100g serving)</StyledTableCell>

            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Energy&nbsp;(kcal)</StyledTableCell>
            <StyledTableCell align="right">Sugar&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Salt&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Vegeterian&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Allegens_tags&nbsp;</StyledTableCell>
            <StyledTableCell align="right">
              Positive points&nbsp;
            </StyledTableCell>
            <StyledTableCell align="right">
              Negative points&nbsp;
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? (
            data.product && (
              <StyledTableRow key={data.product.product_name}>
                <StyledTableCell component="th" scope="row">
                  {data.product.product_name || "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.nutriments
                    ? data.product.nutriments.fat || "N/A"
                    : "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.nutriments
                    ? data.product.nutriments.carbohydrates || "N/A"
                    : "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.nutriments
                    ? data.product.nutriments.proteins || "N/A"
                    : "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.nutriments
                    ? data.product.nutriments.energy || "N/A"
                    : "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.nutriments
                    ? data.product.nutriments.sugars || "N/A"
                    : "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.nutriments
                    ? data.product.nutriments.salt || "N/A"
                    : "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.ingredients &&
                  data.product.ingredients.length > 1
                    ? data.product.ingredients[1].vegetarian
                    : "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.allergens_tags
                    .map((tag) => tag.replace(/^en:/, ""))
                    .join(", ")}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.nutriscore_data
                    ? data.product.nutriscore_data.positive_points
                    : "N/A"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {data.product.nutriscore_data
                    ? data.product.nutriscore_data.negative_points
                    : "N/A"}
                </StyledTableCell>
              </StyledTableRow>
            )
          ) : (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" colSpan={11}>
                Loading...
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function MyTable() {
  const dataa = useData();
  const data = dataa.data;
  // console.log(data.data.product);
  return (
    <div className="mt-4 flex flex-col">
      <CustomizedTables data={data} />

      <div className="mt-12 flex flex-row flex-wrap justify-between">
        {data.product ? (
          <img
            src={data.product.image_front_small_url}
            alt=""
            className="mb-4 md:mb-0"
          />
        ) : (
          <p>Loading...</p>
        )}
        {data.product ? (
          <img
            src={data.product.image_ingredients_small_url}
            alt=""
            className="mb-4 md:mb-0"
          />
        ) : (
          <p></p>
        )}
        {data.product ? (
          <img
            src={data.product.image_nutrition_small_url}
            alt=""
            className="mb-4 md:mb-0"
          />
        ) : (
          <p></p>
        )}
        {data.product ? (
          <img
            src={data.product.image_packaging_small_url}
            alt=""
            className="mb-4 md:mb-0"
          />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
