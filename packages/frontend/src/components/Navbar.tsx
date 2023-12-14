"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { Button } from "./Button";
import { NotificationIcon } from "./Icon/components/NotificationIcon";
import { UserIcon } from "./Icon";
import RowWrapper from "./RowWrapper";

const Navbar = () => {
  return (
    <div className=" sticky tw-z-50 tw-top-0 tw-inset-x-0">
      <header className="tw-relative tw-bg-white">
        <MaxWidthWrapper>
          <div className="tw-border-b tw-border-neutral-700 max-w-screen-xl	tw-flex tw-justify-center ">
            <RowWrapper>
              <div className="tw-flex tw-h-16 tw-items-center tw-w-full ">
                <div className="tw-ml-4 tw-relative tw-w-28 tw-h-8">
                  <Image
                    className="tw-w-16 "
                    src="/logo.svg"
                    alt="Logo image"
                    fill
                  />
                </div>

                <div className="tw-ml-auto flex tw-items-center">
                  <div className="tw-flex tw-flex-1 tw-items-center tw-justify-end tw-space-x-6">
                    <div className="tw-mr-4 tw-flex tw-justify-between tw-w-28">
                      <Button
                        appearance="iconOnly"
                        aria-label={"Notifications"}
                        icon={<NotificationIcon size="xl" />}
                        isMenu
                      />
                      <Button
                        appearance="iconOnly"
                        aria-label={"User settings"}
                        icon={<UserIcon size="xl" />}
                        isMenu
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RowWrapper>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
