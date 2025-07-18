import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  SET_COUNTRIES,
  INC_LIMIT,
  SET_CONTINENTS,
  SET_SELECTED_CONTINENT,
  SET_FILTERED_COUNTRIES,
} from "../../store/actions";

//api services
import { getCountries } from "../../services/countryServices";

//components
import FullscreenLoader from "../../components/common/Loader/LoaderComponent";
import Button from "../../components/common/Buttons/Button";
import CountriesListingSectionComponent from "../../components/layouts/CountriesListing/CountriesListingSectionComponent";
import CustomSelect from "../../components/common/Select/SelectComponent";
import ImageSliderSection from "../../components/layouts/ImageSlider/ImageSliderSection";
import SingleImageSection from "../../components/layouts/ImageSlider/SingleImageSection";


export default function HomePage() {
  const dispatch = useDispatch();
  const countriesConfigFromStore = useSelector((state) => state.countries);

  const [loading, setLoading] = useState(true);
  const [renderTrigger, setRenderTrigger] = useState(false);
  const [countriesAfterRegionFilter, setCountriesAfterRegionFilter] = useState(
    []
  );

  useEffect(() => {
    getCountriesAPICall();
  }, []);

  useEffect(() => {
    let filteredCountries = countriesConfigFromStore.countries;
    const limit = countriesConfigFromStore.limit;
    const selectedContinent = countriesConfigFromStore.selectedcontinent;

    if (selectedContinent == "all") {
      filteredCountries = countriesConfigFromStore.countries;
    }
    if (selectedContinent != null && selectedContinent != "all") {
      filteredCountries = filteredCountries.filter(
        (country) => country.region == selectedContinent
      );
    }

    setCountriesAfterRegionFilter(filteredCountries);

    filteredCountries = filteredCountries.slice(0, limit);
    dispatch({ type: SET_FILTERED_COUNTRIES, payload: filteredCountries });
  }, [
    countriesConfigFromStore.countries,
    countriesConfigFromStore.limit,
    countriesConfigFromStore.selectedcontinent,
  ]);

  const getCountriesAPICall = async () => {
    try {
      const countries = await getCountries();

      dispatch({ type: SET_COUNTRIES, payload: countries });
      let continents = extractContinents(countries);

      dispatch({ type: SET_CONTINENTS, payload: continents });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const extractContinents = (arrayData) => {
    return [...new Set(arrayData.map((item) => item.region))].map(
      (name, idx) => ({ id: idx + 1, name })
    );
  };

  const onSelectContinent = (continent) => {
    dispatch({ type: SET_SELECTED_CONTINENT, payload: continent });
    setRenderTrigger(!renderTrigger);
  };

  return (
    <>
      <FullscreenLoader show={loading} />
      <Container className="mt-5 mb-5">
        {!loading ? (
          <Row className="SliderSection">
            <Col xs={12} md={3} className="p-1 order-1 order-md-2">
              <SingleImageSection src={`https://picsum.photos/200`} />
            </Col>

            <Col xs={12} md={9} className="p-1 order-2 order-md-1">
              <ImageSliderSection
                images={[
                  `https://picsum.photos/id/58/200/300`,
                  `https://picsum.photos/id/29/200/300`,
                  `https://picsum.photos/id/28/200/300`,
                  `https://picsum.photos/id/17/200/300`,
                  `https://picsum.photos/id/15/200/300`,
                ]}
              />
            </Col>
          </Row>
        ) : null}

        <Container fluid style={{ backgroundColor: "" }} className="mt-3">
          {!loading ? (
            <>
              <Row className="p-1">
                <Col md={3} lg={3}>
                  <CustomSelect
                    options={countriesConfigFromStore.continents}
                    label={"continents"}
                    placeholder={"Select a continent"}
                    displayKey={"name"}
                    valueKey={"name"}
                    onChange={onSelectContinent}
                  />
                </Col>
              </Row>
              <CountriesListingSectionComponent
                countries={countriesConfigFromStore.filteredCountries}
                renderTrigger={renderTrigger}
              />
              {countriesConfigFromStore.filteredCountries.length <
              countriesAfterRegionFilter.length ? (
                <Row className="justify-content-center">
                  <Col md={3} lg={3}>
                    <Button
                      label="Load More"
                      onClick={() => {
                        dispatch({ type: INC_LIMIT });
                      }}
                    />
                  </Col>
                </Row>
              ) : null}
            </>
          ) : null}
        </Container>
      </Container>
    </>
  );
}
