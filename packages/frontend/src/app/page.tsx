"use client";
import React from "react";

import { Calendar } from "@/components/Calendar";
import { ChartsDiagram } from "@/components/ChartsDiagram";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RowWrapper from "@/components/RowWrapper";
import { Select, SelectItem } from "@/components/Select";
import { Headline, Text } from "@/components/Typography";
import useFetch from "@/utils/useFetch";
import { getOrderData } from "./api";

export default function Home() {
  const { data } = useFetch("http://localhost:5000/getData");

  const [selectedProvider, setSelectedProvider] = React.useState<
    SelectItem | null | number
  >(null);
  const [selectedDates, setSelectedDates] = React.useState<
    SelectItem | any | null
  >(null);
  const [orderData, setOrderData] = React.useState<any>(null);

  React.useEffect(() => {
    if (selectedProvider && selectedDates) {
      getOrderData(selectedProvider, selectedDates[0], selectedDates[1])
        .then((data) => setOrderData(data))
        .catch((error) => console.error(error));
    }
  }, [selectedProvider, selectedDates]);

  return (
    <MaxWidthWrapper>
      <div className="tw-flex tw-justify-center tw-flex-col tw-items-center">
        <RowWrapper>
          <Headline
            weight="semiBold"
            level={1}
            size="xs"
            addClassName="tw-mt-10 tw-mb-2"
          >
            Dzienna sprzedaż
          </Headline>
          <Text size="sm" addClassName="tw-mb-6">
            Podsumowanie dziennej sprzedaży według klienta w wybranym zakresie
            dat.
          </Text>
        </RowWrapper>
        <RowWrapper>
          <div className="tw-mx-auto tw-grid md:tw-grid-cols-2 tw-gap-6 tw-h-10">
            <div className="tw-grid tw-grid-cols-2   tw-gap-3">
              <div className="tw-relative ">
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
              <div className="tw-relative ">
                <Calendar setSelectedDates={setSelectedDates} />
              </div>
            </div>
          </div>
          <div className="tw-mx-auto tw-grid tw-grid-cols-1 tw-mt-8 tw-h-80">
            <ChartsDiagram data={orderData} />
          </div>
        </RowWrapper>
      </div>
    </MaxWidthWrapper>
  );
}
