import { FC } from "react";
import { useTimeFromNow } from "../../hooks/useTimeFromNow";
import { VscRepoPull, VscRepo, VscInfo } from "react-icons/vsc";
import { IChapterVersion } from "../../interfaces/IChapterVersion";
export const ChapterVersions: FC<{
  checkoutBranch?: (branch: any) => void;
  openMergeModal: () => void;
  chapterVersions: IChapterVersion[];
}> = ({ checkoutBranch, openMergeModal, chapterVersions }) => {
  if (!chapterVersions) {
    return null;
  }

  return (
    <div className="min-w-auto max-w-md flex-grow ">
      {chapterVersions.length > 0 ? (
        <div className="shadow-lg p-5">
          <h3 className="text-lg flex font-bold gap-2">
            Versions <VscInfo size={18} className="cursor-pointer my-auto" />
          </h3>
          <div className="max-h-60 overflow-y-auto">
            {chapterVersions.map((version: any, index) => (
              <div
                key={index}
                className="flex justify-between gap-2 px-2 border-b border-stone-700"
              >
                <div className="">
                  <div className="flex gap-1 transition-all ease-in-out duration-200">
                    <button
                      // onClick={() => checkoutBranch(version)}
                      className={`hover:text-orange-200 ${
                        version.uid === version.uid
                          ? "text-blue-300"
                          : "text-stone-300"
                      }`}
                    >
                      <VscRepo size={18} />
                    </button>
                    {/* {currentChapterContent.uid === version.uid ? (
                    <div className="mt-1 ">
                      <button
                        onClick={openMergeModal}
                        className="flex gap-1 hover:text-red-300"
                      >
                        <VscRepoPull size={18} />
                      </button>
                    </div>
                  ) : (
                    ""
                  )} */}
                    <p className="text-purple-300 font-semibold">
                      {version.name ? version.name : "Version"}:
                    </p>
                  </div>
                </div>
                <p>{useTimeFromNow(version.dateCreated.date)}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className=" flex gap-2 text-center align-middle text-sm">
          <button className="text-stone-300">
            <VscRepo size={18} />
          </button>
          You do not have any versions saved for this chapter
        </p>
      )}
    </div>
  );
};
