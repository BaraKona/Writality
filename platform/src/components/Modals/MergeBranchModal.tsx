import {
  Button,
  Input,
  Modal,
  TextInput,
  useMantineTheme,
  Select,
} from "@mantine/core";
import React, { FC, useState } from "react";
import { VscGitMerge } from "react-icons/vsc";
import { IconChevronDown, IconChevronRight } from "@tabler/icons";
import { IChapterContent } from "../../interfaces/IChapterContent";
import { IChapterVersion } from "../../interfaces/IChapterVersion";

export const MergeBranchModal: FC<{
  mergeOpened: boolean;
  setMergeOpened: React.Dispatch<React.SetStateAction<boolean>>;
  mergeBranch: () => void;
  replaceMain: () => void;
  currentBranch: IChapterVersion;
  setPosition: React.Dispatch<React.SetStateAction<string | null>>;
  position: string;
}> = ({
  mergeOpened,
  setMergeOpened,
  mergeBranch,
  replaceMain,
  currentBranch,
  setPosition,
  position,
}) => {
  const theme = useMantineTheme();

  const selectionData = [
    { label: "Merge at top", value: "before" },
    { label: "Merge at bottom", value: "after" },
  ];
  return (
    <>
      <Modal
        size="lg"
        opened={mergeOpened}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        styles={{
          modal: { backgroundColor: "#1b1c25", border: "solid 1px #363130" },
        }}
        overlayOpacity={0.55}
        overlayBlur={3}
        onClose={() => setMergeOpened(false)}
        title={`Merging ${currentBranch?.name} into main 🤝`}
      >
        <p className="border-t-stone-800">
          Merging{" "}
          <span className="text-orange-300 underline">
            {currentBranch?.name}
          </span>{" "}
          into <span className="text-orange-300 underline">main</span> will
          replace the main content of your chapter with that of{" "}
          {currentBranch?.name}. However, do not worry. A copy of your current
          main will be saved in case you ever want to go back!
          <br />
          <br />
          <span className="text-orange-300 underline">Note:</span> Merging
          branches will not delete the branch. You can always go back to it
          later. However, if you want to delete the branch, you can do so in the
          branch manager.
        </p>
        <div className="mt-5 flex ">
          {/* <TextInput
            className="mb-3"
            error={branchName ? undefined : "Branch name is required"}
            placeholder="Branch name"
            value={branchName}
            onChange={(event) => setBranchName(event.currentTarget.value)}
          /> */}
          <Button
            variant="light"
            color="orange"
            leftIcon={<VscGitMerge size={14} />}
            onClick={replaceMain}
            className="bg-stone-700 mr-3"
          >
            Replace Main
          </Button>
          {/* <Button
            variant="light"
            color="orange"
            onClick={mergeBranch}
            className="bg-stone-800"
            leftIcon={<VscGitMerge size={14} />}
          >
            Merge into Main
          </Button> */}
          <Select
            placeholder="Merge into Main"
            data={selectionData}
            clearable
            className="bg-baseMid mr-1"
            value={position}
            onChange={setPosition}
            color="orange"
            error={position ? undefined || null : "Please select a position"}
          />
          <Button
            className=" bg-stone-700 text-orange-100"
            onClick={mergeBranch}
            color="orange"
            variant="light"
          >
            <VscGitMerge size={14} />
          </Button>
          <Button
            className="ml-auto bg-red-900"
            color="red"
            onClick={() => setMergeOpened(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};
