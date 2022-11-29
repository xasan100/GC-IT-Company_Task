import React from "react";
import Images1 from "../../components/assest/images/Group1.png";
import Images2 from "../../components/assest/images/Group2.png";
import Images3 from "../../components/assest/images/Group3.png";

import ImgOY from "../../components/assest/images/carbon_moon.svg"
import ImgSound from "../../components/assest/images/Group.svg"

import { Content, Percent, PupilsBox } from "../Pupils/style";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  Box,
  BoxBottom,
  FlexWrap,
  Grid,
  Setting,
  Slider,
  SliderDiv,
  SliderItem,
  Wrap,
  Wrapper,
} from "./style";
import { Container } from "../Dashboard/style.js";
import { AddBox, NAV } from "../../components/Students/style.js";

const Users = () => {
  return (
    <Container>
    
      <PupilsBox auto>
        <Content>
          <img src={Images3} alt="" />
          <div>
            <span className="description">Hamma o’quvchilar</span>
            <h2 className="text">125 ta</h2>
            <Percent>16% Oylik</Percent>
          </div>
        </Content>
        <Content>
          <img src={Images2} alt="" />
          <div>
            <span className="description">Ketgan O’quvchilar</span>
            <h2 className="text">10 ta</h2>
            <Percent>1% oylik</Percent>
          </div>
        </Content>
        <Content>
          <img src={Images1} alt="" />
          <div>
            <span className="description">Bitirgan o’quvchilar</span>
            <h2 className="text">61 ta</h2>
            <Percent>1% oylik</Percent>
          </div>
        </Content>
      </PupilsBox>
      <Wrapper>
        <FlexWrap>
          <h1 className="title">Guruhlar</h1>
          <h6>Oktabr, 27</h6>
        </FlexWrap>
        <FlexWrap space>
          <div>
            <div>7</div>
            <div className="description">Faol Guruhlar</div>
          </div>
          <div>
            <div>2</div>
            <div className="description">Tugagan Guruh</div>
          </div>
          <div>
            <div>9</div>
            <div className="description">Umumiy guruh </div>
          </div>
        </FlexWrap>

        <Grid>
          <Box>
            <Setting>
              <p>December 20, 2022</p>
              <div>
                <HiOutlineDotsVertical />
              </div>
            </Setting>
            <h2 className="title">Frontent 010</h2>
            <p className="description">O’quvchilar soni : 6</p>
            <Slider>
              <h6>O’rtacha o’z</h6>
              <SliderDiv>
                <SliderItem></SliderItem>
              </SliderDiv>
              <Wrap>
                <h5></h5>
                <h5>70%</h5>
              </Wrap>
            </Slider>
            <BoxBottom>
              <p>O’qituvchi</p>
            </BoxBottom>
          </Box>
          <Box backend>
            <Setting>
              <p>December 20, 2022</p>
              <div>
                <HiOutlineDotsVertical />
              </div>
            </Setting>
            <h2>Frontent 010</h2>
            <p className="description">O’quvchilar soni : 6</p>
            <Slider>
              <h6>O’rtacha o’z</h6>
              <SliderDiv>
                <SliderItem></SliderItem>
              </SliderDiv>
              <Wrap>
                <h5></h5>
                <h5>70%</h5>
              </Wrap>
            </Slider>
            <BoxBottom>
              <p>O’qituvchi</p>
            </BoxBottom>
          </Box>
          <Box>
            <Setting>
              <p>December 20, 2022</p>
              <div>
                <HiOutlineDotsVertical />
              </div>
            </Setting>
            <h2 className="title">Backend 001</h2>
            <p className="description">O’quvchilar soni : 6</p>
            <Slider>
              <h6>O’rtacha o’z</h6>
              <SliderDiv>
                <SliderItem></SliderItem>
              </SliderDiv>
              <Wrap>
                <h5></h5>
                <h5>70%</h5>
              </Wrap>
            </Slider>
            <BoxBottom>
              <p>O’qituvchi</p>
            </BoxBottom>
          </Box>
          <Box>
            <Setting>
              <p>December 20, 2022</p>
              <div>
                <HiOutlineDotsVertical />
              </div>
            </Setting>
            <h2 className="title">Frontent 010</h2>
            <p className="description">O’quvchilar soni : 6</p>
            <Slider>
              <h6>O’rtacha o’z</h6>
              <SliderDiv>
                <SliderItem></SliderItem>
              </SliderDiv>
              <Wrap>
                <h5></h5>
                <h5>70%</h5>
              </Wrap>
            </Slider>
            <BoxBottom>
              <p>O’qituvchi</p>
            </BoxBottom>
          </Box>
          <Box>
            <Setting>
              <p>December 20, 2022</p>
              <div>
                <HiOutlineDotsVertical />
              </div>
            </Setting>
            <h2 className="title">Frontent 010</h2>
            <p className="description">O’quvchilar soni : 6</p>
            <Slider>
              <h6>O’rtacha o’z</h6>
              <SliderDiv>
                <SliderItem></SliderItem>
              </SliderDiv>
              <Wrap>
                <h5></h5>
                <h5>70%</h5>
              </Wrap>
            </Slider>
            <BoxBottom>
              <p>O’qituvchi</p>
            </BoxBottom>
          </Box>
          <Box backend>
            <Setting>
              <p>December 20, 2022</p>
              <div>
                <HiOutlineDotsVertical />
              </div>
            </Setting>
            <h2 className="title">Frontent 010</h2>
            <p className="description">O’quvchilar soni : 6</p>
            <Slider>
              <h6>O’rtacha o’z</h6>
              <SliderDiv>
                <SliderItem></SliderItem>
              </SliderDiv>
              <Wrap>
                <h5></h5>
                <h5>70%</h5>
              </Wrap>
            </Slider>
            <BoxBottom>
              <p>O’qituvchi</p>
            </BoxBottom>
          </Box>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Users;
