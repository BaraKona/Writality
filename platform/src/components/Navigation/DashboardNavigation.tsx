import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cyclops8 } from "../../assets/icons";
import { profileIllustration } from "../../assets/illustrations";
import { useAuthContext } from "../../contexts/AuthContext";
import { Menu, Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconSearch,
  IconArrowsLeftRight,
  IconLogout,
} from "@tabler/icons";
export default function DashboardNavigation() {
  const navigate = useNavigate();
  const { currentUser, signOutCurrentUser } = useAuthContext();

  const handleSignOut = async () => {
    await signOutCurrentUser().then(() => {
      navigate("/auth/login");
    });
  };
  return (
    <div className="border-b border-baseBorder flex">
      <Menu
        trigger="hover"
        openDelay={100}
        closeDelay={400}
        offset={10}
        withArrow
        width={200}
        shadow="md"
        position="bottom-end"
      >
        <div className="cursor-pointer mr-auto">
          <Link to="/">
            <div className="my-1 flex">
              <img
                src={cyclops8}
                alt="writality"
                width={30}
                height={30}
                className="inline-block"
              />
              <h1 className="font-bold px-2 text-lg text-slate-200">
                Writality
              </h1>
            </div>
          </Link>
        </div>
        <Menu.Target>
          <img
            src={profileIllustration}
            alt="writality"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label className="text-center">{currentUser?.name}</Menu.Label>
          <Menu.Label className="text-center">{currentUser?.email}</Menu.Label>
          <Menu.Divider />
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
          <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
          <Menu.Item
            icon={<IconSearch size={14} />}
            rightSection={
              <Text size="xs" color="dimmed">
                ???K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
            Transfer my data
          </Menu.Item>
          <Menu.Item
            onClick={handleSignOut}
            color="red"
            icon={<IconLogout size={14} />}
          >
            Sign out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
