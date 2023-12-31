import { ReactNode } from "react"
import { Element } from "slate";
import { ImageAreaElement, TableCellElement } from "./CustomEditor";

export interface ToolbarButtonModel {
  format: string,
  icon: ReactNode
  tooltip: string
};

export interface FontSizeModel {
  tooltip: string
};

export interface FontColorModel {
  tooltip: string
};

export interface HighlightColorModel {
  tooltip: string
};

export interface HeadingTitleModel {
  tooltip: string
};

export interface RenderElementProps {
  children: any;
  element: Element;
  attributes: {
      'data-slate-node': 'element';
      'data-slate-inline'?: true;
      'data-slate-void'?: true;
      dir?: 'rtl';
      ref: any;
  };
}

export interface RenderLeafProps {
  children: any
  leaf: Text
  text: Text
  attributes: {
    'data-slate-leaf': true
  }
}

export interface TableElementModel {
  attributes: {
    'data-slate-node': 'element';
    'data-slate-inline'?: true;
    'data-slate-void'?: true;
    dir?: 'rtl';
    ref: any;
  },
  colIndex?: number,
  element?: TableCellElement,
  width?: number,
  children: any,
  rowIndex?: number
};

export interface ImageAreaElementModel {
  attributes: {
    'data-slate-node': 'element';
    'data-slate-inline'?: true;
    'data-slate-void'?: true;
    dir?: 'rtl';
    ref: any;
  },
  colIndex?: number,
  element?: ImageAreaElement,
  width?: number,
  children: any
};