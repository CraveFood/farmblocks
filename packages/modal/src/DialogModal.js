import React from "react";
import EmptyState from "@crave/farmblocks-empty-state";
import pick from "lodash.pick";
import omit from "lodash.omit";

import Modal from "./Modal";

const modalPropKeys = [...Object.keys(Modal.propTypes), "className"];

const DialogModal = (props) => (
  <Modal
    showCloseButton={false}
    {...pick(props, modalPropKeys)}
    cardProps={{
      width: "560px",
      py: [0, 2],
      ...props.cardProps,
    }}
  >
    <EmptyState className="empty-state" {...omit(props, modalPropKeys)} />
  </Modal>
);
DialogModal.propTypes = {
  ...Modal.propTypes,
  ...EmptyState.propTypes,
};

export default DialogModal;
