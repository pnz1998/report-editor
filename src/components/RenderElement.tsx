/** @jsxImportSource @emotion/react */
import { Editor } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import { css } from '@emotion/react';
import Table from "./Table/components/Table";
import TableRow from "./Table/components/TableRow";
import TableCell from "./Table/components/TableCell";
import { RenderElementProps } from "../core/models/EditorModels";
import ImageArea from "./Image/components/ImageArea";

export const SlateElement = ({ attributes, children, element }: RenderElementProps): JSX.Element => {
  const editor: Editor = useSlate();
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'bulleted-list':
      return (
        <ul 
          style={style}
          css={css`
            margin-left: 18px;
          `}
          {...attributes}
        >
          {children}
        </ul>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol 
          style={style}
          css={css`
            margin-left: 18px;
          `}
          {...attributes}
        >
          {children}
        </ol>
      )
    case 'table':
      return (
        <Table attributes={attributes}>
          {children}
        </Table>
      )
    case 'tr':
      return (
        <TableRow attributes={attributes}>
          {children}
        </TableRow>
      )
    case 'td':
      return (
        <TableCell attributes={attributes} element={element} rowIndex={ReactEditor.findPath(editor as any, element)[1]} colIndex={ReactEditor.findPath(editor as any, element)[2]}>
          {children}
        </TableCell>
      )
    case 'img-area':
      return (
        <ImageArea attributes={attributes} element={element}>
          {children}
        </ImageArea>
      )
    default: {
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
    }
  }
};