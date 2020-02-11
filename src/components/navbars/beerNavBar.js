import React, { useContext } from "react";
import { func, number } from "prop-types";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/Inputgroup";

import { LoadingContext } from "../contexts/loadingContext";

/******************
 * BeerNavBar -- Displays a lesser nav bar for the beer product page, showing:
 * - introductory header "Available Beers"
 * - current page number (beers are paginated)
 * - search input box
 ***********/
const BeerNavBar = ({ setFilter, page }) => {
  const isLoading = useContext(LoadingContext);
  var inputTimeout;

  const parseInput = e => {
    const safeValue = e.target.value
      .replace(/[^0-9a-z-A-Z ]/g, "")
      .replace(/ +/, " ");
    const filter = { beerName: safeValue };
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(
      () => setFilter(filter),
      process.env.REACT_APP_SEARCH_DELAY
    );
  };

  return (
    <Navbar className="justify-content-between">
      <h2 className="lead">Available Beers</h2>
      <h2 className="lead">
        <span>{isLoading ? "•" : page} </span>
      </h2>
      {/*<Nav.Link className="h6 text-muted"</Nav.Link>*/}
      <Form inline>
        <InputGroup className="mb-3">
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
  setFilter: func,
  page: number
};

export default BeerNavBar;
