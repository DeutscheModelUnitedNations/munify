import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";

interface ColormodeOption {
  name: string;
  icon: string;
  value: string;
}

interface SettingsSidebarProps {
  settingsSidebarVisible: boolean;
  setSettingsSidebarVisible: (visible: boolean) => void;
}

/**
 * This Component is the sidebar that is displayed when the user clicks on the settings icon in the navbar.
 * It displays the settings of the user, which are:
 * - Colortheme
 * - Language
 * - ...
 * TODO: add more settings
 * TODO: add functionality to change settings
 * TODO: add functionality to save settings
 * TODO: add functionality to reset settings
 */

export default function SettingsSidebar({
  settingsSidebarVisible,
  setSettingsSidebarVisible,
}: SettingsSidebarProps) {
  const [colortheme, setColortheme] = useState<ColormodeOption>({
    name: "Hell",
    icon: "pi pi-sun",
    value: "light",
  }); // TODO: get this from global state or cookie

  const colortheme_items: ColormodeOption[] = [
    { name: "Hell", icon: "pi pi-sun", value: "light" },
    { name: "Dunkel", icon: "pi pi-moon", value: "dark" },
    { name: "Kontrast", icon: "pi pi-circle-fill", value: "contrast" },
  ];

  const colorModeTemplate = (option: ColormodeOption) => {
    return (
      <>
        <span className={option.icon} />
        <span className="p-ml-2 ml-2">{option.name}</span>
      </>
    );
  };

  return (
    <Sidebar
      visible={settingsSidebarVisible}
      onHide={() => setSettingsSidebarVisible(false)}
      fullScreen
      className="bg-gray-light" // TODO: Not working
    >
      {/* TODO Settings */}
      <Card title="Color Mode">
        <SelectButton
          value={colortheme}
          onChange={(e) => setColortheme(e.value)}
          itemTemplate={colorModeTemplate}
          optionLabel="Color Theme"
          options={colortheme_items}
        />
      </Card>
    </Sidebar>
  );
}
