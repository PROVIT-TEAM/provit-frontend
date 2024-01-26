import React from "react";
import colors from "../../../themes/colors";

type IconProps = {
  iconName: string;
};

const Icon = (props: IconProps) => {
  const { iconName } = props;
  switch (iconName) {
    case "kakao":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="#FEE500" />
          <path
            opacity="0.902"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 15.0489C18.7667 15.0489 14 19.2556 14 22.8144C14 25.4811 15.7311 27.8333 18.3678 29.2311L17.2589 33.3044C17.16 33.6656 17.57 33.9522 17.8844 33.7444L22.7478 30.5167C23.1578 30.5567 23.5756 30.58 24 30.58C29.5222 30.58 34 27.1033 34 22.8144C34 19.2556 29.5222 15.0489 24 15.0489Z"
            fill="black"
          />
        </svg>
      );
    case "naver":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="#03C75A" />
          <g clip-path="url(#clip0_666_1391)">
            <path
              d="M26.8491 24.5627L20.9169 16H16V32H21.1509V23.436L27.0831 32H32V16H26.8491V24.5627Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_666_1391">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(16 16)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "google":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="49"
            height="49"
            rx="24.5"
            stroke="#747775"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.6 25.2273C34.6 24.5182 34.5364 23.8364 34.4182 23.1818H25V27.05H30.3818C30.15 28.3 29.4455 29.3591 28.3864 30.0682V32.5773H31.6182C33.5091 30.8364 34.6 28.2727 34.6 25.2273Z"
            fill="#4285F4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.9998 35C27.6998 35 29.9635 34.1045 31.618 32.5773L28.3862 30.0682C27.4907 30.6682 26.3453 31.0227 24.9998 31.0227C22.3953 31.0227 20.1907 29.2636 19.4044 26.9H16.0635V29.4909C17.7089 32.7591 21.0907 35 24.9998 35Z"
            fill="#34A853"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.4045 26.9C19.2045 26.3 19.0909 25.6591 19.0909 25C19.0909 24.3409 19.2045 23.7 19.4045 23.1V20.5091H16.0636C15.3864 21.8591 15 23.3864 15 25C15 26.6136 15.3864 28.1409 16.0636 29.4909L19.4045 26.9Z"
            fill="#FBBC05"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.9998 18.9773C26.468 18.9773 27.7862 19.4818 28.8226 20.4727L31.6907 17.6045C29.9589 15.9909 27.6953 15 24.9998 15C21.0907 15 17.7089 17.2409 16.0635 20.5091L19.4044 23.1C20.1907 20.7364 22.3953 18.9773 24.9998 18.9773Z"
            fill="#EA4335"
          />
        </svg>
      );
    case "close":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_674_1484"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="white" />
          </mask>
          <g mask="url(#mask0_674_1484)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.4661 6.349C19.5775 6.23757 19.666 6.10527 19.7264 5.95966C19.7867 5.81405 19.8178 5.65798 19.8179 5.50035C19.8179 5.34272 19.7869 5.18663 19.7266 5.04098C19.6664 4.89534 19.578 4.76299 19.4666 4.6515C19.3551 4.54 19.2228 4.45155 19.0772 4.39119C18.9316 4.33082 18.7755 4.29973 18.6179 4.29968C18.4603 4.29964 18.3042 4.33064 18.1585 4.39092C18.0129 4.45119 17.8805 4.53957 17.7691 4.651L12.1181 10.303L6.46605 4.651C6.23841 4.43837 5.93706 4.32251 5.62561 4.32787C5.31416 4.33323 5.01698 4.45938 4.79678 4.67971C4.57658 4.90003 4.4506 5.19729 4.44543 5.50875C4.44026 5.8202 4.5563 6.12148 4.76905 6.349L10.4211 12L4.76905 17.651C4.60201 17.8192 4.48843 18.033 4.4426 18.2656C4.39677 18.4982 4.42073 18.7391 4.51147 18.9581C4.60221 19.1771 4.75568 19.3644 4.95258 19.4964C5.14947 19.6284 5.381 19.6992 5.61805 19.7C5.92505 19.7 6.23205 19.583 6.46605 19.349L12.1181 13.697L17.7691 19.349C17.8803 19.4607 18.0126 19.5493 18.1582 19.6097C18.3038 19.6702 18.4599 19.7013 18.6176 19.7013C18.7752 19.7013 18.9313 19.6702 19.0769 19.6097C19.2225 19.5493 19.3548 19.4607 19.4661 19.349C19.5776 19.2375 19.6661 19.1052 19.7265 18.9595C19.7869 18.8138 19.818 18.6577 19.818 18.5C19.818 18.3423 19.7869 18.1861 19.7265 18.0405C19.6661 17.8948 19.5776 17.7624 19.4661 17.651L13.8151 12L19.4661 6.349Z"
              fill="white"
            />
          </g>
        </svg>
      );
    case "clock":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <rect width="20" height="20" fill="none" />
          <g mask="url(#mask0_674_1149)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.8175 9.87917C10.8128 9.93561 10.8013 9.99129 10.7833 10.045C10.7532 10.1446 10.7039 10.2375 10.6383 10.3183C10.6017 10.3625 10.5633 10.4017 10.5183 10.4383C10.4975 10.455 10.485 10.4792 10.4625 10.4942L6.52417 13.1192C6.34026 13.2371 6.11738 13.2782 5.90353 13.2334C5.68967 13.1887 5.50194 13.0617 5.38077 12.8799C5.2596 12.6981 5.21468 12.476 5.25568 12.2614C5.29669 12.0468 5.42033 11.8568 5.6 11.7325L9.16667 9.355V5.46333C9.16667 5.24232 9.25446 5.03036 9.41074 4.87408C9.56702 4.7178 9.77899 4.63 10 4.63C10.221 4.63 10.433 4.7178 10.5893 4.87408C10.7455 5.03036 10.8333 5.24232 10.8333 5.46333V9.80083C10.8333 9.82833 10.82 9.8525 10.8175 9.87917ZM1.25 10C1.25 14.8325 5.1675 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.1675 14.8325 1.25 10 1.25C5.1675 1.25 1.25 5.1675 1.25 10Z"
              fill="#8E8E93"
            />
          </g>
        </svg>
      );
    case "clip":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <rect width="20" height="20" fill="none" />
          <g mask="url(#mask0_674_1157)">
            <path
              d="M2.58319 16.1667C0.166524 13.75 0.166524 9.75004 2.58319 7.25004L6.33319 3.50004C6.66652 3.16671 7.24986 3.16671 7.66652 3.50004C7.99986 3.83337 7.99986 4.41671 7.66652 4.83337L3.91652 8.58337C2.16652 10.3334 2.16652 13.1667 3.91652 14.8334C5.66652 16.5834 8.49986 16.5834 10.1665 14.8334L16.6665 8.33337C17.6665 7.33337 17.6665 5.58337 16.6665 4.58337C15.6665 3.58337 13.9165 3.58337 12.9165 4.58337L6.99986 10.5C6.66652 10.8334 6.66652 11.4167 6.99986 11.75C7.33319 12.0834 7.91652 12.0834 8.24986 11.75L12.2499 7.75004C12.5832 7.41671 13.1665 7.41671 13.5832 7.75004C13.9165 8.08337 13.9165 8.66671 13.5832 9.08337L9.58319 13.0834C8.41652 14.1667 6.66652 14.1667 5.66652 13.0834C4.58319 12 4.58319 10.3334 5.66652 9.25004L11.5832 3.33337C13.3332 1.58337 16.1665 1.58337 17.9165 3.33337C19.6665 5.08337 19.6665 7.91671 17.9165 9.66671L11.4165 16.1667C10.2499 17.3334 8.66652 18 6.99986 18C5.41652 18 3.74986 17.4167 2.58319 16.1667Z"
              fill="#8E8E93"
            />
          </g>
        </svg>
      );
    case "check":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <rect width="20" height="20" fill="none" />
          <g mask="url(#mask0_674_1719)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.68701 13.1659C9.53028 13.3215 9.31833 13.4089 9.09743 13.4089C8.87652 13.4089 8.66458 13.3215 8.50785 13.1659L5.66118 10.3192C5.58381 10.2418 5.52244 10.15 5.48056 10.0489C5.43869 9.94781 5.41714 9.83946 5.41714 9.73004C5.41714 9.50906 5.50492 9.29713 5.66118 9.14087C5.81744 8.98462 6.02937 8.89683 6.25035 8.89683C6.47133 8.89683 6.68326 8.98462 6.83951 9.14087L9.09701 11.3984L13.1612 7.33421C13.2386 7.25684 13.3304 7.19546 13.4315 7.15359C13.5326 7.11172 13.6409 7.09017 13.7503 7.09017C13.8598 7.09017 13.9681 7.11172 14.0692 7.15359C14.1703 7.19546 14.2621 7.25684 14.3395 7.33421C14.4169 7.41158 14.4783 7.50343 14.5201 7.60452C14.562 7.70561 14.5836 7.81396 14.5836 7.92337C14.5836 8.03279 14.562 8.14114 14.5201 8.24223C14.4783 8.34332 14.4169 8.43517 14.3395 8.51254L9.68701 13.1659ZM0.833679 10C0.833679 15.0625 4.93785 19.1667 10.0003 19.1667C15.0628 19.1667 19.167 15.0625 19.167 10C19.167 4.93754 15.0628 0.833374 10.0003 0.833374C4.93785 0.833374 0.833679 4.93754 0.833679 10Z"
              fill="#446FF6"
            />
          </g>
        </svg>
      );
    case "nonCheck":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <rect width="20" height="20" fill="none" />
          <g mask="url(#mask0_674_1719)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.68701 13.1659C9.53028 13.3215 9.31833 13.4089 9.09743 13.4089C8.87652 13.4089 8.66458 13.3215 8.50785 13.1659L5.66118 10.3192C5.58381 10.2418 5.52244 10.15 5.48056 10.0489C5.43869 9.94781 5.41714 9.83946 5.41714 9.73004C5.41714 9.50906 5.50492 9.29713 5.66118 9.14087C5.81744 8.98462 6.02937 8.89683 6.25035 8.89683C6.47133 8.89683 6.68326 8.98462 6.83951 9.14087L9.09701 11.3984L13.1612 7.33421C13.2386 7.25684 13.3304 7.19546 13.4315 7.15359C13.5326 7.11172 13.6409 7.09017 13.7503 7.09017C13.8598 7.09017 13.9681 7.11172 14.0692 7.15359C14.1703 7.19546 14.2621 7.25684 14.3395 7.33421C14.4169 7.41158 14.4783 7.50343 14.5201 7.60452C14.562 7.70561 14.5836 7.81396 14.5836 7.92337C14.5836 8.03279 14.562 8.14114 14.5201 8.24223C14.4783 8.34332 14.4169 8.43517 14.3395 8.51254L9.68701 13.1659ZM0.833679 10C0.833679 15.0625 4.93785 19.1667 10.0003 19.1667C15.0628 19.1667 19.167 15.0625 19.167 10C19.167 4.93754 15.0628 0.833374 10.0003 0.833374C4.93785 0.833374 0.833679 4.93754 0.833679 10Z"
              fill={colors.label}
            />
          </g>
        </svg>
      );
    case "leftArrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="24"
            width="24"
            height="24"
            transform="rotate(90 24 0)"
            fill="none"
          />
          <g mask="url(#mask0_674_1422)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.3218 4.28793C16.5737 4.54093 16.7151 4.88341 16.7151 5.24043C16.7151 5.59744 16.5737 5.93992 16.3218 6.19293L10.5168 11.9979L16.3218 17.7879C16.5737 18.0409 16.7151 18.3834 16.7151 18.7404C16.7151 19.0974 16.5737 19.4399 16.3218 19.6929C16.0688 19.9448 15.7263 20.0862 15.3693 20.0862C15.0123 20.0862 14.6698 19.9448 14.4168 19.6929L7.66677 12.9429C7.41488 12.6899 7.27346 12.3474 7.27346 11.9904C7.27346 11.6334 7.41488 11.2909 7.66677 11.0379L14.4168 4.28793C14.6718 4.03293 15.0168 3.89793 15.3618 3.89793C15.7068 3.89793 16.0518 4.03293 16.3218 4.28793Z"
              fill="white"
            />
          </g>
        </svg>
      );
    case "rightArrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="24"
            width="24"
            height="24"
            transform="rotate(90 24 0)"
            fill="none"
          />
          <g mask="url(#mask0_674_1427)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.66657 19.6962C7.41468 19.4432 7.27325 19.1007 7.27325 18.7437C7.27325 18.3867 7.41468 18.0442 7.66657 17.7912L13.4716 11.9862L7.66657 6.1962C7.41468 5.9432 7.27325 5.60072 7.27325 5.2437C7.27325 4.88669 7.41468 4.54421 7.66657 4.2912C7.91957 4.03931 8.26205 3.89789 8.61907 3.89789C8.97609 3.89789 9.31857 4.03931 9.57157 4.2912L16.3216 11.0412C16.5735 11.2942 16.7149 11.6367 16.7149 11.9937C16.7149 12.3507 16.5735 12.6932 16.3216 12.9462L9.57157 19.6962C9.31657 19.9512 8.97157 20.0862 8.62657 20.0862C8.28157 20.0862 7.93657 19.9512 7.66657 19.6962Z"
              fill="white"
            />
          </g>
        </svg>
      );
    case "menu":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <rect y="0.5" width="24" height="24" fill="none" />
          <g mask="url(#mask0_674_1136)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.46446 14.3476C4.22177 14.247 4.00128 14.0995 3.81556 13.9137C3.62984 13.7279 3.48254 13.5074 3.38207 13.2646C3.28159 13.0219 3.22991 12.7617 3.22998 12.499C3.23005 12.2363 3.28186 11.9762 3.38245 11.7335C3.48305 11.4908 3.63046 11.2703 3.81627 11.0846C4.00208 10.8989 4.22265 10.7516 4.46538 10.6511C4.70812 10.5506 4.96827 10.499 5.23098 10.499C5.76155 10.4992 6.27033 10.71 6.6454 11.0853C7.02047 11.4606 7.23111 11.9695 7.23098 12.5C7.23085 13.0306 7.01995 13.5394 6.64469 13.9144C6.26943 14.2895 5.76055 14.5002 5.22998 14.5C4.96727 14.5 4.70715 14.4481 4.46446 14.3476ZM10.5868 13.9142C10.2117 13.5392 10.001 13.0305 10.001 12.5C10.001 11.9696 10.2117 11.4609 10.5868 11.0858C10.9618 10.7107 11.4705 10.5 12.001 10.5C12.5314 10.5 13.0401 10.7107 13.4152 11.0858C13.7903 11.4609 14.001 11.9696 14.001 12.5C14.001 13.0305 13.7903 13.5392 13.4152 13.9142C13.0401 14.2893 12.5314 14.5 12.001 14.5C11.4705 14.5 10.9618 14.2893 10.5868 13.9142ZM18.0055 14.3476C17.7628 14.247 17.5423 14.0995 17.3566 13.9137C17.1708 13.7279 17.0235 13.5074 16.9231 13.2646C16.8226 13.0219 16.7709 12.7617 16.771 12.499C16.771 12.2363 16.8229 11.9762 16.9235 11.7335C17.024 11.4908 17.1715 11.2703 17.3573 11.0846C17.5431 10.8989 17.7636 10.7516 18.0064 10.6511C18.2491 10.5506 18.5093 10.499 18.772 10.499C19.3025 10.4992 19.8113 10.71 20.1864 11.0853C20.5615 11.4606 20.7721 11.9695 20.772 12.5C20.7718 13.0306 20.561 13.5394 20.1857 13.9144C19.8104 14.2895 19.3015 14.5002 18.771 14.5C18.5083 14.5 18.2481 14.4481 18.0055 14.3476Z"
              fill="#8E8E93"
            />
          </g>
        </svg>
      );
    case "editIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <rect y="0.5" width="16" height="16" fill="none" />
          <g mask="url(#mask0_1047_1424)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.18192 10.1773L1.35792 13.2506L0.815923 15.2753C0.800869 15.3319 0.800944 15.3914 0.816141 15.4479C0.831338 15.5045 0.861124 15.556 0.902514 15.5974C0.943904 15.6388 0.995444 15.6686 1.05197 15.6838C1.1085 15.699 1.16803 15.699 1.22459 15.684L3.24792 15.1413L6.32192 14.3173H6.32259L12.3639 8.27597L8.22392 4.13597H8.22326L2.18192 10.1773ZM14.8619 4.83597L11.6646 1.63797C11.6027 1.57601 11.5293 1.52685 11.4484 1.49331C11.3675 1.45977 11.2808 1.4425 11.1933 1.4425C11.1057 1.4425 11.019 1.45977 10.9381 1.49331C10.8573 1.52685 10.7838 1.57601 10.7219 1.63797L9.07192 3.28731L13.2126 7.42797L14.8619 5.77797C14.9239 5.71611 14.973 5.64264 15.0066 5.56177C15.0401 5.48089 15.0574 5.39419 15.0574 5.30664C15.0574 5.21908 15.0401 5.13239 15.0066 5.05151C14.973 4.97063 14.9239 4.89716 14.8619 4.83531"
              fill="#8E8E93"
            />
          </g>
        </svg>
      );
    case "deleteIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <rect y="0.5" width="16" height="16" fill="none" />
          <g mask="url(#mask0_1047_1430)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.8681 12.0816C9.75558 12.1941 9.60297 12.2573 9.44384 12.2573C9.28471 12.2573 9.1321 12.1941 9.01957 12.0816C8.90705 11.969 8.84384 11.8164 8.84384 11.6573V8.31996C8.84384 8.16083 8.90705 8.00822 9.01957 7.8957C9.1321 7.78318 9.28471 7.71996 9.44384 7.71996C9.60297 7.71996 9.75558 7.78318 9.8681 7.8957C9.98062 8.00822 10.0438 8.16083 10.0438 8.31996V11.6573C10.0438 11.8164 9.98062 11.969 9.8681 12.0816ZM7.11277 12.0816C7.00025 12.1941 6.84763 12.2573 6.6885 12.2573C6.52937 12.2573 6.37676 12.1941 6.26424 12.0816C6.15172 11.969 6.0885 11.8164 6.0885 11.6573V8.31996C6.0885 8.16083 6.15172 8.00822 6.26424 7.8957C6.37676 7.78318 6.52937 7.71996 6.6885 7.71996C6.84763 7.71996 7.00025 7.78318 7.11277 7.8957C7.22529 8.00822 7.2885 8.16083 7.2885 8.31996V11.6573C7.2885 11.8164 7.22529 11.969 7.11277 12.0816ZM6.21443 2.60123C6.33946 2.4762 6.50903 2.40597 6.68584 2.40597H9.4485C9.81584 2.40597 10.1152 2.70463 10.1152 3.07263V3.69997H6.01917V3.07263C6.01917 2.89582 6.08941 2.72625 6.21443 2.60123ZM11.4485 3.69997V3.07263C11.4485 1.96997 10.5518 1.07263 9.4485 1.07263H6.68584C5.58317 1.07263 4.68584 1.96997 4.68584 3.07263V3.69997H2.4665C2.25433 3.69997 2.05085 3.78425 1.90082 3.93428C1.75079 4.08431 1.6665 4.28779 1.6665 4.49996V4.89996C1.6665 5.11214 1.75079 5.31562 1.90082 5.46565C2.05085 5.61568 2.25433 5.69997 2.4665 5.69997H2.55384L2.8685 13.724C2.88487 14.1371 3.06055 14.5279 3.35871 14.8144C3.65687 15.1009 4.05435 15.2608 4.46784 15.2606H11.6652C12.0785 15.2608 12.4759 15.1008 12.7738 14.8143C13.0718 14.5278 13.2471 14.137 13.2632 13.724L13.5792 5.69063C13.7821 5.68023 13.9734 5.59249 14.1136 5.44543C14.2538 5.29837 14.3324 5.10317 14.3332 4.89996V4.49996C14.3332 4.05863 13.9745 3.69997 13.5325 3.69997H11.4485Z"
              fill="#8E8E93"
            />
          </g>
        </svg>
      );
    default:
      return <div></div>;
  }
};

export default Icon;
