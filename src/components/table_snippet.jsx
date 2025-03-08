import React, { useState } from "react";
import { useContext } from "react";
import { PatchAPI } from "../apis/patch_api";
import ButtonToggle from "./ui_elements/buttons/button_toggle";
import { SnippetContext } from "../utils/snippet_context";
import { AuthContext } from "../utils/auth_context";

function SnippetTable({ columns, data, rowClick }) {
  const { refreshSnippets } = useContext(SnippetContext);
  const { user } = useContext(AuthContext);

  async function togglePublicStatus(snippet) {
    try {
      const updatedSnippet = { ...snippet, is_public: !snippet.is_public };
      const response = await PatchAPI("update-snippet/", updatedSnippet);
      if (response) {
        refreshSnippets();
      } else {
        console.error("Fehler beim Update");
      }
    } catch (error) {
      console.error("Fehler in togglePublicStatus:", error);
    }
  }

  return (
    <div className="overflow-x-scroll rounded-lg shadow-lg ">
      <table className="border-separate border-spacing-0 w-full">
        <thead className="bg-primary text-white uppercase text-sm">
          <tr>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-left">Language</th>
            <th className="px-6 py-3 text-left">Created at</th>
            <th className="px-6 py-3 text-left">is public</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => rowClick && rowClick(row)}
              className="hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column}`}
                  className="px-6 py-4 text-gray-800"
                >
                  {column === "is_public" ? (
                    <ButtonToggle
                      onBtnClick={(e) => {
                        e.stopPropagation();
                        togglePublicStatus(row);
                      }}
                      className={``}
                      isActive={row.is_public}
                      isDeactivated={row.user_id != user.id}
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SnippetTable;
