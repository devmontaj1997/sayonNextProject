"use client";

import {
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  ChevronFirst,
  ChevronLast,
  ChevronsDownUp,
  ChevronUp,
  Columns3,
  Eye,
  Fullscreen,
  Maximize2,
  Minus,
  Plus,
  Radius,
  Shrink,
} from "lucide-react";
import InputBox from "../InputBox/InputBox";
import IconInputComponent from "../iconInputComponents/IconInputComponent";
import { FlipHorizontal, RotateCw, FlipVertical } from "lucide-react";
import FormGroup from "@mui/material/FormGroup";

import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

const Sidebar = (): React.JSX.Element => {
  return (
    <div className="my-10 mx-10">
      <div className="container ">
        <div className="frameOne bg-[#1E1E1E] w-[280px]">
          <div className="styleTopArea p-[12px]">
            <div className="styleHeading">
              <h1 className="font-dmSans font-[900] text-white text-xl">
                Styles
              </h1>
            </div>

            <div className="subHeading">
              <p className=" text-[#B5B5B5] mt-3 font-[300] text-[12.9px] font-dmSans">
                Show your creativity! You can customize every component as you
                like.
              </p>
            </div>

            {/* this custom Area start */}
            <div className="customArea pb-5  ">
              <div className="customHeadingAndIcon flex mt-8 justify-between">
                <div className="customHeading ">
                  <h2 className="text-white  font-[600] text-[14.94px] font-dmSans">
                    Custom
                  </h2>
                </div>
                <div className="customIcon">
                  <div className="customIcon">
                    <ChevronUp className="text-[#ACACAC] text-[18px]" />
                    {/* <ChevronDown  className="text-[#ACACAC] text-[18px]" /> */}
                  </div>
                </div>
              </div>

              <div className="witdhHeigth flex gap-1">
                <div className="widthArea">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Width
                  </h3>

                  <div className="widthInput">
                    <InputBox />
                  </div>
                </div>
                <div className="hightArea">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Heigth
                  </h3>
                  <div className="hightInput">
                    <InputBox />
                  </div>
                </div>
              </div>

              <div className="angleArea  ">
                <div className="angleArea">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Angle
                  </h3>
                  <div className="angleInputAndIcon flex gap-1">
                    <div className="angleInput">
                      <InputBox />
                    </div>
                    <div className="angleIcon">
                      <IconInputComponent
                        icons={[RotateCw, FlipHorizontal, FlipVertical]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="connerRedusArea">
                <div className="cornerRadiusHeading">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Corner Radius
                  </h3>
                </div>
                <div className="connerRedusInputAndIcon grid grid-cols-6 items-center justify-end gap-1">
                  <div className="connerRedusInput col-span-3">
                    <InputBox />
                  </div>
                  <div className="connerRedusIcon  col-span-1 "></div>
                  <div className="connerRedusIcon  col-span-1 "></div>
                  <div className="connerRedusIcon  col-span-1 p-2 rounded-[5px]  bg-[#373737] text-[#ACACAC] inline-block text-[18px] ">
                    <Radius />
                  </div>
                </div>
              </div>
            </div>
            {/* this custom Area end */}
          </div>

          {/* fillArea Area start */}

          <div className="fillArea border-t-[2px] border-t-[#373737] ">
            <div className="fillAreatop p-[12px]">
              <div className="fillHeadingAndIcon flex justify-between">
                <div className="fillHeading ">
                  <h2 className="text-white  font-[600] text-[14.94px] font-dmSans">
                    Fill
                  </h2>
                </div>
                <div className="FillIcon">
                  <div className="FillIcon">
                    <ChevronUp className="text-[#ACACAC] text-[18px]" />
                    {/* <ChevronDown  className="text-[#ACACAC] text-[18px]" /> */}
                  </div>
                </div>
              </div>

              <div className="ObjectFillAndAppearance flex justify-between gap-1 ">
                <div className="ObjectFill">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Object Fill
                  </h3>
                </div>
                <div className="AppearanceArea">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Appearance
                  </h3>
                </div>
              </div>

              <div className="colorPickerArea flex items-center gap-1">
                <div
                  className="colorInput flex gap-1 rounded-[5px] bg-[#373737] p-2 border 
          border-transparent 
          hover:border-[#6A6A6A] 
          focus:border-[#726FFF] 
          focus:outline-none"
                >
                  <div>
                    <input
                      type="color"
                      className="border-none outline-none p-0"
                    />
                  </div>
                  <div>
                    <h3 className="text-white">#00000</h3>
                  </div>
                </div>

                <div className="AppearanceInput">
                  <input className="custom-range" type="range" />
                </div>
              </div>

              <div className="borderRedusArea">
                <div className="borderRadiusHeading">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Border Radius
                  </h3>
                </div>
                <div className="borderRedusInputAndIcon grid grid-cols-6 items-center justify-end gap-1">
                  <div className="borderRedusInput col-span-3">
                    <InputBox />
                  </div>
                  <div className="borderRedusIcon  col-span-1 "></div>
                  <div className="borderRedusIcon  col-span-1 "></div>
                  <div className="borderRedusIcon  col-span-1 p-2 rounded-[5px]  bg-[#373737] text-[#ACACAC] inline-block text-[18px] ">
                    <Radius />
                  </div>
                </div>
              </div>
              <div className="bgImgArea">
                <div className="bgImgHeading">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    BG Image
                  </h3>
                </div>
                <div className="bgImgInputAndIcon grid grid-cols-6 items-center justify-end gap-1">
                  <div
                    className="bgImgIcon  col-span-1 p-2   bg-[#373737] text-[#ACACAC] inline-block text-[18px] "
                    style={{ borderRadius: " 5px 0px 0px 5px" }}
                  >
                    <Radius />
                  </div>
                  <div className="bgImgInput col-span-5">
                    <input
                      className="  bg-[#373737] 
          text-white
          p-2 
          border 
          w-[100%]
          border-transparent 
          hover:border-[#6A6A6A] 
          focus:border-[#726FFF] 
          focus:outline-none"
                      type="text"
                      placeholder="Url()"
                      style={{ borderRadius: " 0px 5px 5px 0px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="imagePositionArea">
                <div className="imagePositionHeading">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Image Position
                  </h3>
                </div>
                <div className="bgImgInputAndIcon grid grid-cols-6 items-center justify-end gap-1">
                  <div className="bgImgInput col-span-6">
                    <IconInputComponent
                      icons={[
                        ChevronFirst,
                        ChevronsDownUp,
                        ChevronLast,
                        Maximize2,
                        Fullscreen,
                        Shrink,
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="ImageOpacityArea flex justify-between pb-5 gap-1 border-b-[2px] border-b-[#373737] ">
                <div className="ImageOpacityHeading">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Image Opacity
                  </h3>
                </div>
                <div className="ImageOpacity">
                  <input className="custom-range" type="range" />
                </div>
              </div>
            </div>
          </div>
          {/* fillArea Area end */}

          {/* layout grid area start */}

          <div className="layoutGridArea">
            <div className="layoutArea p-[12px] ">
              <div className="layoutTopArea flex mt-2 justify-between">
                <div className="layoutAreaHeading">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Layout Grid
                  </h3>
                </div>
                <div className="layoutAreaIcon">
                  <div className="layoutAreaIcon">
                    <Plus className="text-[#fff] text-[18px]" />
                  </div>
                </div>
              </div>

              <div className="layoutLastArea">
                <div className="layoutLastAreaIcon">
                  <div className="layoutLastAreaIconAndInput grid grid-cols-7 items-center justify-center gap-2">
                    <div className="layoutLastAreaIcon justify-self-center  col-span-1 p-2 rounded-[5px] bg-[#373737] text-[#fff] inline-block text-[18px] ">
                      <Columns3 />
                    </div>

                    <div className="layoutLastAreaInput col-span-4">
                      <select
                        className="  bg-[#373737] 
          text-white
          p-2 
          rounded-[5px]
          border 
          w-[100%]
          border-transparent 
          hover:border-[#6A6A6A] 
          focus:border-[#726FFF] 
          focus:outline-none"
                      >
                        <option value="1"> 1 Coloms</option>
                        <option value="1"> 2 Coloms</option>
                        <option value="3"> 3 Coloms</option>
                        <option value="4"> 4 Coloms</option>
                        <option value="5"> 5 Coloms</option>
                        <option value="6">6 Coloms</option>
                        <option value="7">7 Coloms</option>
                        <option value="8">8 Coloms</option>
                        <option value="9">9 Coloms</option>
                        <option value="10">10 Coloms</option>
                        <option value="11">11 Coloms</option>
                        <option value="12">12 Coloms</option>
                      </select>
                    </div>

                    <div className="viewBtn col-span-1 justify-self-end text-[#fff] inline-block text-[18px] ">
                      <Eye />
                    </div>
                    <div className="MinusBtn col-span-1 justify-self-end text-[#fff] inline-block text-[18px]">
                      <Minus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* layout grid area ennd */}

          {/* flex box area start  */}
          <div className="flexArea border-b-[2px] border-b-[#373737] ">
            <div className="fullFlexBox p-[12px]">
              <div className="FlexBoxHeadingAndIcon flex mt-2 justify-between items-center">
                <div className="FlexBoxHeading ">
                  <h2 className="text-white  font-[600] text-[14.94px] font-dmSans">
                    Flex Box
                  </h2>
                </div>
                <div className="FlexBoxIcon justify-self-end">
                  <div className="FlexBoxIcon">
                    <FormGroup className="">
                      <FormControlLabel
                        control={
                          <Switch
                            sx={{
                              "& .MuiSwitch-track": {
                                background:
                                  "linear-gradient(90deg, #A4A3FF 0%, #726FFF 100%)",
                              },
                              "& .MuiSwitch-thumb": {
                                backgroundColor: "#fff", // optional: to customize the thumb color
                              },
                            }}
                          />
                        }
                        label={undefined}
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>

              <div className="XYArea flex gap-1">
                <div className="xArea">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    X
                  </h3>

                  <div className="XInput">
                    <InputBox />
                  </div>
                </div>
                <div className="yightArea">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Y
                  </h3>
                  <div className="YInput">
                    <InputBox />
                  </div>
                </div>
              </div>

              <div className="flexBoxWitdhHeigth flex gap-1">
                <div className="flexBoxWidthArea">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Width
                  </h3>

                  <div className="widthInput">
                    <InputBox />
                  </div>
                </div>
                <div className="flexBoxHightArea">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Heigth
                  </h3>
                  <div className="flexBoxHightInput">
                    <InputBox />
                  </div>
                </div>
              </div>

              <div className="justifyContentArea">
                <div className="justifyContenHeading">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Justify Content
                  </h3>
                </div>
                <div className="justifyContenInputAndIcon grid grid-cols-5">
                  <div className="bgImgInput col-span-5">
                    <IconInputComponent
                      icons={[
                        AlignHorizontalSpaceBetween,
                        AlignHorizontalSpaceAround,
                        AlignHorizontalJustifyCenter,
                        AlignHorizontalJustifyStart,
                        AlignHorizontalJustifyEnd,
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="AlignItemsArea">
                <div className="AlignItemsHeading">
                  <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                    Align Items
                  </h3>
                </div>
                <div className="AlignItemsInputAndIcon grid grid-cols-5">
                  <div className="AlignItemsInput col-span-5">
                    <IconInputComponent
                      icons={[
                        AlignVerticalSpaceBetween,
                        AlignVerticalSpaceAround,
                        AlignVerticalJustifyCenter,
                        AlignVerticalJustifyEnd,
                        AlignVerticalJustifyStart,
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* flex box area end  */}

          {/* Selection Color area start */}
          <div className="selectionColorArea p-[12px]">
            <div className="allColorHeading">
              <h3 className="text-[#ACACAC] my-2  font-[500] text-[12.22px] font-dmSans">
                Selection Color
              </h3>
            </div>
            <div className="allColor grid row-span-4 gap-2">
              <div className="colorOne">
                <div className="colorPickerArea flex items-center gap-1">
                  <div className="colorInput flex gap-1 rounded-[5px] bg-[#373737] p-2 border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none">
                    <div>
                      <input
                        type="color"
                        className="border-none outline-none p-0"
                      />
                    </div>
                    <div>
                      <h3 className="text-white">#00000</h3>
                    </div>
                  </div>

                  <div className="AppearanceInput">
                    <input className="custom-range" type="range" />
                  </div>
                </div>
              </div>

              <div className="colorTwo">
                <div className="colorPickerArea flex items-center gap-1">
                  <div className="colorInput flex gap-1 rounded-[5px] bg-[#373737] p-2 border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none">
                    <div>
                      <input
                        type="color"
                        className="border-none outline-none p-0"
                      />
                    </div>
                    <div>
                      <h3 className="text-white">#00000</h3>
                    </div>
                  </div>

                  <div className="AppearanceInput">
                    <input className="custom-range" type="range" />
                  </div>
                </div>
              </div>

              <div className="colorThree">
                <div className="colorPickerArea flex items-center gap-1">
                  <div className="colorInput flex gap-1 rounded-[5px] bg-[#373737] p-2 border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none">
                    <div>
                      <input
                        type="color"
                        className="border-none outline-none p-0"
                      />
                    </div>
                    <div>
                      <h3 className="text-white">#00000</h3>
                    </div>
                  </div>

                  <div className="AppearanceInput">
                    <input className="custom-range" type="range" />
                  </div>
                </div>
              </div>

              <div className="colorFour">
                <div className="colorPickerArea flex items-center gap-1">
                  <div className="colorInput flex gap-1 rounded-[5px] bg-[#373737] p-2 border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none">
                    <div>
                      <input
                        type="color"
                        className="border-none outline-none p-0"
                      />
                    </div>
                    <div>
                      <h3 className="text-white">#00000</h3>
                    </div>
                  </div>

                  <div className="AppearanceInput">
                    <input className="custom-range" type="range" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Selection Color area end */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
