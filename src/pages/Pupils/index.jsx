import React, { useState } from "react";
import Images from "../../assets/images/Group1.png";
import Images1 from "../../assets/images/Group2.png";
import Images2 from "../../assets/images/Group3.png";
import Images3 from "../../assets/images/Group4.png";
import Button from "../../components/Generic/Button";
import { FlexWrap, Icons } from "../../layout/Navbar/style";
import { users } from "../../utils/tableData";
import {
  Content,
  Input,
  Percent,
  PupilsBox,
  Select,
  Table,
  Tbody,
  Tdata,
  Text,
  Thead,
  TopContent,
  Trow,
  Wrap,
  Wrapper,
} from "./style";

const Pupils = () => {
  const [data, setData] = useState(users);
  const [name, setName] = useState("");

  const getSearch = (e) => {
    const newInfo = data.filter(
      (val) =>
        val.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        val.group.toLowerCase().includes(e.target.value.toLowerCase()) ||
        val.direction.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(newInfo);
    console.log(newInfo);
    if (e.target.value === "") {
      setData([
        {
          id: 1,
          name: "Jane Cooper",
          direction: "Microsoft",
          phone: "(225) 555-0118",
          payment: "597 000",
          group: "Backend 010",
          status: true,
        },
        {
          id: 2,
          name: "Floyd Miles",
          direction: "Yahoo",
          phone: "(205) 555-0100",
          payment: "597 000",
          group: "Frontend 010",
          status: false,
        },
        {
          id: 3,
          name: "Ronald Richards",
          direction: "Adobe",
          phone: "(302) 555-0107",
          payment: "ronald@adobe.com",
          group: "Frontend 010",
          status: true,
        },
        {
          id: 4,
          name: "Marvin McKinney",
          direction: "Tesla",
          phone: "(252) 555-0126",
          payment: "marvin@tesla.com",
          group: "Frontend 010",
          status: false,
        },
        {
          id: 5,
          name: "Jerome Bell",
          direction: "Google",
          phone: "(629) 555-0129",
          payment: "jerome@google.com",
          group: "Backend 010",
          status: false,
        },
        {
          id: 6,
          name: "Kathryn Murphy",
          direction: "Microsoft",
          phone: "(406) 555-0120",
          payment: "kathryn@microsoft.com",
          group: "Frontend 010",
          status: false,
        },
        {
          id: 7,
          name: "Jacob Jones",
          direction: "Yahoo",
          phone: "(208) 555-0112",
          payment: "jacob@yahoo.com",
          group: "Frontend 010",
          status: false,
        },
        {
          id: 8,
          name: "Kristin Watson",
          direction: "Facebook",
          phone: "(704) 555-0127",
          payment: "kristin@facebook.com",
          group: "Frontend 010",
          status: false,
        },
      ]);
    }
  };

  const getSelect = (e) => {
    // const newInfo = data.filter((val) =>
    //   val.status === e.target.value ? val : ""
    // );
  };
  return (
    <div>
      <PupilsBox>
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
        <Content>
          <img src={Images} alt="" />
          <div>
            <span className="description">Faol o’quvchilar</span>
            <h2 className="text">54 ta</h2>
            <Percent>1% oylik</Percent>
          </div>
        </Content>
      </PupilsBox>
      <Wrapper>
        <TopContent>
          <Text>
            <h2 className="title">Hamma O’quvchilar</h2>
            <p>Faol o’quvchilar</p>
          </Text>
          <FlexWrap>
            <FlexWrap>
              <Input onChange={getSearch} placeholder="Search" />
              <Icons.Search />
            </FlexWrap>
            <Wrap>
              <Select onClick={getSelect} defaultValue="">
                <option>All</option>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </Select>
              <p>Short Status : </p>
            </Wrap>
          </FlexWrap>
        </TopContent>
        <Table>
          <Thead>
            <Trow>
              <Tdata>F.I.O</Tdata>
              <Tdata>Yo’nalish</Tdata>
              <Tdata>Telefon nomer</Tdata>
              <Tdata>To’lov</Tdata>
              <Tdata>Guruh</Tdata>
              <Tdata>Status</Tdata>
            </Trow>
          </Thead>
          <Tbody>
            {data?.map((item, index) => {
              return (
                <Trow key={index}>
                  <Tdata>{item.name}</Tdata>
                  <Tdata>{item.direction}</Tdata>
                  <Tdata>{item.phone}</Tdata>
                  <Tdata>{item.payment}</Tdata>
                  <Tdata>{item.group}</Tdata>
                  <Tdata>
                    <Button type={item.status ? "primary" : "light"}>
                      {item.status ? "Active" : "InActive"}
                    </Button>
                  </Tdata>
                </Trow>
              );
            })}
          </Tbody>
        </Table>
      </Wrapper>
    </div>
  );
};

export default Pupils;
