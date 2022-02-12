// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kzkatsDCvzPQVqDSnS1EKs
// Component: qgrz47A8td
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: gM35gl7eyM/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_plasmic_whats_app_clone.module.css"; // plasmic-import: kzkatsDCvzPQVqDSnS1EKs/projectcss
import sty from "./PlasmicChatListItem.module.css"; // plasmic-import: qgrz47A8td/css

export const PlasmicChatListItem__VariantProps = new Array();

export const PlasmicChatListItem__ArgProps = new Array();

function PlasmicChatListItem__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
        color={"_2"}
        isEmpty={true}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__y2WVl
          )}
        >
          {"Username"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__fsj8G
          )}
        >
          {"Last message content. blah blah blah"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "avatar", "freeBox"],
  avatar: ["avatar"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicChatListItem__ArgProps,
      internalVariantPropNames: PlasmicChatListItem__VariantProps
    });

    return PlasmicChatListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChatListItem";
  } else {
    func.displayName = `PlasmicChatListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicChatListItem = Object.assign(
  // Top-level PlasmicChatListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicChatListItem
    internalVariantProps: PlasmicChatListItem__VariantProps,
    internalArgProps: PlasmicChatListItem__ArgProps
  }
);

export default PlasmicChatListItem;
/* prettier-ignore-end */