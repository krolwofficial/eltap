import React, { ReactElement } from "react";
import { Headline } from ".";
import { Text } from ".";

export default {
  title: "Typography/Headline",
  component: Headline,
};

export const Default = (): ReactElement => {
  return (
    <div className="tw-flex tw-flex-col tw-p-20 tw-w-[1400px]">
      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Headline weight="medium" level={1} size="dl" addClassName="tw-mr-12">
            Display L
          </Headline>
          <Headline
            weight="semiBold"
            level={1}
            size="dl"
            addClassName="tw-mr-12"
          >
            Display L
          </Headline>
          <Headline weight="bold" level={1} size="dl" addClassName="tw-mr-12">
            Display L
          </Headline>
          <Headline weight="heavy" level={1} size="dl" addClassName="tw-mr-12">
            Display L
          </Headline>
        </div>
        <div className="tw-flex tw-flex-row ">
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Medium / Semi Bold / Bold / Heavy</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">64 px</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">68</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-2%</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Headline weight="medium" level={1} size="dm" addClassName="tw-mr-12">
            Display M
          </Headline>
          <Headline
            weight="semiBold"
            level={1}
            size="dm"
            addClassName="tw-mr-12"
          >
            Display M
          </Headline>
          <Headline weight="bold" level={1} size="dm" addClassName="tw-mr-12">
            Display M
          </Headline>
          <Headline weight="heavy" level={1} size="dm" addClassName="tw-mr-12">
            Display M
          </Headline>
        </div>
        <div className="tw-flex tw-flex-row ">
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold / Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">52 px</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">60</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-1%</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Headline
            weight="regular"
            level={1}
            size="xl"
            addClassName="tw-mr-12"
          >
            Headline xL
          </Headline>
          <Headline weight="medium" level={1} size="xl" addClassName="tw-mr-12">
            Headline xL
          </Headline>
          <Headline
            weight="semiBold"
            level={1}
            size="xl"
            addClassName="tw-mr-12"
          >
            Headline xL
          </Headline>
          <Headline weight="bold" level={1} size="xl" addClassName="tw-mr-12">
            Headline xL
          </Headline>
        </div>
        <div className="tw-flex tw-flex-row ">
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Light / Regular / Medium / Semi Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">40 px</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">48</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-2 %</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Headline weight="light" level={1} size="lg" addClassName="tw-mr-12">
            Headline L
          </Headline>
          <Headline
            weight="regular"
            level={1}
            size="lg"
            addClassName="tw-mr-12"
          >
            Headline L
          </Headline>
          <Headline weight="medium" level={1} size="lg" addClassName="tw-mr-12">
            Headline L
          </Headline>
          <Headline
            weight="semiBold"
            level={1}
            size="lg"
            addClassName="tw-mr-12"
          >
            Headline L
          </Headline>
          <Headline weight="bold" level={1} size="lg" addClassName="tw-mr-12">
            Headline L
          </Headline>
        </div>
        <div className="tw-flex tw-flex-row ">
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Light / Regular / Medium / Semi Bold / Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">36 px</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">44</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-2 %</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Headline
            weight="regular"
            level={1}
            size="md"
            addClassName="tw-mr-12"
          >
            Headline M
          </Headline>
          <Headline weight="medium" level={1} size="md" addClassName="tw-mr-12">
            Headline M
          </Headline>
          <Headline
            weight="semiBold"
            level={1}
            size="md"
            addClassName="tw-mr-12"
          >
            Headline M
          </Headline>
          <Headline weight="bold" level={1} size="md" addClassName="tw-mr-12">
            Headline M
          </Headline>
        </div>
        <div className="tw-flex tw-flex-row ">
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold / Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">32 px</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">40</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-1 %</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Headline
            weight="regular"
            level={1}
            size="sm"
            addClassName="tw-mr-12"
          >
            Headline S
          </Headline>
          <Headline weight="medium" level={1} size="sm" addClassName="tw-mr-12">
            Headline S
          </Headline>
          <Headline
            weight="semiBold"
            level={1}
            size="sm"
            addClassName="tw-mr-12"
          >
            Headline S
          </Headline>
          <Headline weight="bold" level={1} size="sm" addClassName="tw-mr-12">
            Headline S
          </Headline>
        </div>
        <div className="tw-flex tw-flex-row ">
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold / Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">28 px</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">38</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-1%</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Headline
            weight="regular"
            level={1}
            size="xs"
            addClassName="tw-mr-12"
          >
            Headline xS
          </Headline>
          <Headline weight="medium" level={1} size="xs" addClassName="tw-mr-12">
            Headline xS
          </Headline>
          <Headline
            weight="semiBold"
            level={1}
            size="xs"
            addClassName="tw-mr-12"
          >
            Headline xS
          </Headline>
          <Headline weight="bold" level={1} size="xs" addClassName="tw-mr-12">
            Headline xS
          </Headline>
        </div>
        <div className="tw-flex tw-flex-row ">
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold / Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">22 px</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">30</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-1%</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Headline
            weight="regular"
            level={1}
            size="xxs"
            addClassName="tw-mr-12"
          >
            Headline xxS
          </Headline>
          <Headline
            weight="medium"
            level={1}
            size="xxs"
            addClassName="tw-mr-12"
          >
            Headline xxS
          </Headline>
          <Headline
            weight="semiBold"
            level={1}
            size="xxs"
            addClassName="tw-mr-12"
          >
            Headline xxS
          </Headline>
          <Headline weight="bold" level={1} size="xxs" addClassName="tw-mr-12">
            Headline xxS
          </Headline>
        </div>
        <div className="tw-flex tw-flex-row ">
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold / Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">20 px</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">28</Text>
          </div>
          <div className="tw-flex tw-flex-col tw-mr-8">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-0.1 px</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
