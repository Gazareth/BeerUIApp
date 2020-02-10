import React from "react";
import { bool, func, number } from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/Inputgroup";
import Button from "react-bootstrap/Button";

/******************
 * BeerNavBar -- Displays a lesser nav bar for the beer product page, showing:
 * - introductory header "Available Beers"
 * - current page number (beers are paginated)
 * - search input box
 ***********/
const BeerNavBar = ({ isLoading, setFilter, page }) => {
  var inputTimeout;

  const parseInput = e => {
    console.log("Parsing input.", e.target.value);
    const safeValue = e.target.value
      .replace(/[^0-9a-z-A-Z ]/g, "")
      .replace(/ +/, " ");
    const filter = { beerName: safeValue };
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => setFilter(filter), 300);
  };

  return (
    <Navbar className="justify-content-between">
      <h2 className="display-6">Available Beers</h2>
      <h5 className="text-muted">
        <span>• {isLoading ? "-" : page} •</span>
      </h5>
      {/*<Nav.Link className="h6 text-muted"</Nav.Link>*/}
      <Form inline>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button disabled variant="outline-secondary">
              <span role="img" aria-label="Search">
                {isLoading ? "🕑" : "⌨"}
              </span>
            </Button>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={e => parseInput(e)}
          />
        </InputGroup>
      </Form>
    </Navbar>
  );
};

BeerNavBar.propTypes = {
  isLoading: bool,
  setFilter: func,
  page: number
};

export default BeerNavBar;
