import React from "react";
import * as Style from "./style";

const ToC = ({ toc = {} }) => {
  return (
    <Style.FullHeightWrap>
      <Style.StickyToC>
        <ul>
          {toc.items.map((d2Item) => (
            <li key={d2Item.url}>
              <a href={d2Item.url}>{d2Item.title}</a>
              {d2Item?.items && (
                <ul>
                  {d2Item.items.map((d3Item) => (
                    <li key={d3Item.url}>
                      <a href={d3Item.url}>{d3Item.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Style.StickyToC>
    </Style.FullHeightWrap>
  );
};

export default ToC;
