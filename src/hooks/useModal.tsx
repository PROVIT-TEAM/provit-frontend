import { useState } from "react";

export default function useOpenModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const clickToggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return { isOpenModal, clickToggleModal };
}
