import React from "react";

export interface IFooter {
  title: string;
  child: Array<{
    title: string;
    path: string;
  }>;
}

export interface ISocial {
  icon: any;
  iconName: string;
  path: string;
}