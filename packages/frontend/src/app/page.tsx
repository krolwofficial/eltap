"use client";

import { Calendar } from "@/components/Calendar";
import { ChartsDiagram } from "@/components/ChartsDiagram";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RowWrapper from "@/components/RowWrapper";
import { Select, SelectItem } from "@/components/Select";
import { Headline, Text } from "@/components/Typography";
import useFetch from "@/utils/useFetch";
import React from "react";

export default function Home() {
  const { data } = useFetch("http://localhost:5000/getData");

  const [selectedProvider, setSelectedProvider] = React.useState<
    SelectItem | null | number
  >(null);

  const [selectedDates, setSelectedDates] = React.useState<
    SelectItem | any | null
  >(null);

  const [orderData, setOrderData] = React.useState<any>(null);

  function fetchData(url: string): Promise<any> {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  }

  React.useEffect(() => {
    console.log(`selectedProvider: ${selectedProvider}`);
    console.log(`selectedDates: ${selectedDates}`);
    selectedProvider &&
      selectedDates &&
      fetch(
        `http://localhost:5000/getOrderData?clientId=${selectedProvider}&startDate=${selectedDates[0]}&endDate=${selectedDates[1]}`
      )
        .then((response) => response.json())
        .then((data) => setOrderData(data))
        .catch((error) => console.error(error));
  }, [selectedProvider, selectedDates]);

  return (
    <MaxWidthWrapper>
      <div className="tw-flex tw-justify-center tw-flex-col tw-items-center">
        <RowWrapper>
          <Headline
            weight="semiBold"
            level={1}
            size="xs"
            addClassName="tw-mr-12"
          >
            Dzienna sprzedaż
          </Headline>
          <Text size="sm" addClassName="tw-mr-12">
            Podsumowanie dziennej sprzedaży według klienta w wybranym zakresie
            dat.
          </Text>
        </RowWrapper>
        <RowWrapper>
          <div className="tw-mx-auto tw-grid tw-grid-cols-2 tw-gap-6 tw-h-80">
            <div className="tw-grid tw-grid-cols-2 tw-gap-3">
              <div className="tw-relative">
                <Select
                  items={data}
                  placeholder={"Pick item nr"}
                  selectedItem={selectedProvider}
                  updateSelectedItem={setSelectedProvider}
                  onChange={({ selectedItem }) => {
                    selectedProvider(selectedItem);
                  }}
                />
              </div>
              <div className="tw-relative">
                <Calendar setSelectedDates={setSelectedDates} />
              </div>
            </div>
          </div>
          <div className="tw-mx-auto tw-grid tw-grid-cols-1 tw-mt-8 tw-h-80">
            <div className="tw-bg-success-300">
              <ChartsDiagram data={orderData} />
            </div>
          </div>
        </RowWrapper>
      </div>
    </MaxWidthWrapper>
  );
}
