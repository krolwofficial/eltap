import React, { ReactElement } from "react";
import { Text } from ".";

export default {
  title: "Typography/Text",
  component: Text,
};

export const Default = (): ReactElement => {
  return (
    <div className="tw-flex tw-flex-col tw-p-20 tw-w-[600px]">
      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Text size="xl" addClassName="tw-mr-12">
            Text xL
          </Text>
          <Text size="xl" addClassName="tw-mr-12" weight="medium">
            Text xL
          </Text>
          <Text size="xl" addClassName="tw-mr-12" weight="semiBold">
            Text xL
          </Text>
        </div>
        <div className="tw-flex tw-flex-row tw-justify-between">
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">18 px</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">26</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-0.1 px</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Text size="lg" addClassName="tw-mr-12">
            Text L
          </Text>
          <Text size="lg" addClassName="tw-mr-12" weight="medium">
            Text L
          </Text>
          <Text size="lg" addClassName="tw-mr-12" weight="semiBold">
            Text L
          </Text>
        </div>
        <div className="tw-flex tw-flex-row tw-justify-between">
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">16 px</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">24</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">0.15 px</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Text size="md" addClassName="tw-mr-12">
            Text M
          </Text>
          <Text size="md" addClassName="tw-mr-12" weight="medium">
            Text M
          </Text>
          <Text size="md" addClassName="tw-mr-12" weight="semiBold">
            Text M
          </Text>
        </div>
        <div className="tw-flex tw-flex-row tw-justify-between">
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">15 px</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">22</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-0.1 px</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Text size="sm" addClassName="tw-mr-12">
            Text S
          </Text>
          <Text size="sm" addClassName="tw-mr-12" weight="medium">
            Text S
          </Text>
          <Text size="sm" addClassName="tw-mr-12" weight="semiBold">
            Text S
          </Text>
        </div>
        <div className="tw-flex tw-flex-row tw-justify-between">
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">14 px</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">20</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Letter spacing
            </Text>
            <Text size="sm">-0.1 px</Text>
          </div>
        </div>
      </div>

      <div className="tw-border-b tw-border-neutral-600 tw-pb-4 tw-mb-12">
        <div className="tw-flex tw-flex-row tw-mb-6">
          <Text size="xs" addClassName="tw-mr-12">
            Text xS
          </Text>
          <Text size="xs" addClassName="tw-mr-12" weight="medium">
            Text xS
          </Text>
          <Text size="xs" addClassName="tw-mr-12" weight="semiBold">
            Text xS
          </Text>
        </div>
        <div className="tw-flex tw-flex-row tw-justify-between">
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Weight
            </Text>
            <Text size="sm">Regular / Medium / Semi Bold</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              Size
            </Text>
            <Text size="sm">13 px</Text>
          </div>
          <div className="tw-flex tw-flex-col">
            <Text addClassName=" tw-text-gray-50 tw-mb-1" size="sm">
              line height
            </Text>
            <Text size="sm">18</Text>
          </div>
          <div className="tw-flex tw-flex-col">
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
