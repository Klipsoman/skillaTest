import React from "react";
import ContentBody from "./ContentBody/ContentBody";
import Table from "./ContentBody/Table";
import ContentFilters from "./ContentHeader/ContentFilters";
import ContentSettings from "./ContentHeader/ContentSettings";

export default function Content() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__header">
          <ContentSettings />
          <ContentFilters />
        </div>
        <ContentBody>
          <Table />
        </ContentBody>
      </div>
    </div>
  );
}
