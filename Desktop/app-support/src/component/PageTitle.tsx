import React, { useEffect } from "react";

export type PageTitleType = {
  tittle: string;
};

const PageTitle: React.FC<PageTitleType> = ({ tittle }) => {
  useEffect(() => {
    document.title = tittle;
  }, [tittle]);

  return null;
};

export default PageTitle;
