import React, {  useState } from 'react';
import { Form, } from 'antd';
import { AddBox, AntTable, Box, Container, Hero, HeroChilid, InputBox, NAV, TextBox } from './style.js';
import { data } from '../../utils/data.js';

import Img1 from "../assest/images/Group1.png"
import Img2 from "../assest/images/Group2.png" 
import Img3 from "../assest/images/Group3.png"
import Img4 from "../assest/images/Group4.png"

import ImgOY from "../assest/images/carbon_moon.svg"
import ImgSound from "../assest/images/Group.svg"








const Students = () => {
    const [name, setName] = useState("")
    const [info, setInfo] = useState(data)



    const getSearch = (e) => {
        const newInfo = info.filter(
            (val) =>
                val.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                val.Guruh.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setInfo(newInfo);
        console.log(newInfo);
        if (e.target.value === "") {
            setInfo([
                {
                    key: 1,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 2,
                    name: 'Floyd Miles',
                    yunalishi: 'Yahoo',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Inactive"

                },
                {
                    key: 3,
                    name: 'Ronald Richards',
                    yunalishi: 'Adobe',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"
                },
                {
                    key: 4,
                    name: 'Marvin McKinney',
                    yunalishi: 'Tesla',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 5,
                    name: 'Jerome Bell',
                    yunalishi: 'Google',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Inactive"

                },
                {
                    key: 6,
                    name: 'Jacob Jones',
                    yunalishi: 'Yahoo',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"
                },
                {
                    key: 7,
                    name: 'Kristin Watson',
                    yunalishi: 'Facebook',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Inactive"

                },
                {
                    key: 8,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 9,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"
                },
                {
                    key: 10,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 11,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 12,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"
                },
                {
                    key: 1,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 13,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 14,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"
                },
                {
                    key: 15,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 16,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"
                },
                {
                    key: 17,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 18,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"

                },
                {
                    key: 19,
                    name: 'Jane Cooper',
                    yunalishi: 'Microsoft',
                    nomer: '(225) 555-0118',
                    Tolov: '597 000',
                    Guruh: ' Frontend 010',
                    Status: "Active"
                },
            ])
        }

    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 230,

        },
        {
            title: 'yunalishi',
            dataIndex: 'yunalishi',
            key: 'yunalishi',
            width: 200,


        },
        {
            title: 'nomer',
            dataIndex: 'nomer',
            key: 'nomer',
            width: 200,


        },
        {
            title: 'Guruh',
            dataIndex: 'Guruh',
            key: 'Guruh',
            width: 200,



        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            width: 120,


        },
    ];

    return (
        <Container>
            <NAV>
                <div>
                    <h1> HELLO SHERZOD 🖐</h1>
                </div>
                <AddBox>
                    <img src={ImgOY} alt="" />
                    <img src={ImgSound} alt="" />
                    <input placeholder='Qidiruv' type="text" />
                </AddBox>
            </NAV>
         
            
            <Hero>
                
                <HeroChilid>
                    <img src={Img3} alt="" />
                    <TextBox>
                        <p>Hamma o’quvchilar</p>
                        <h4>125 ta</h4>
                        <p>16% Oylik</p>
                    </TextBox>
                </HeroChilid>
                <HeroChilid>
                    <img src={Img3} alt="" />
                    <TextBox>
                        <p>Hamma o’quvchilar</p>
                        <h4>61 ta</h4>
                    </TextBox>
                </HeroChilid>
                <HeroChilid>
                    <img src={Img2} alt="" />
                    <TextBox>
                        <p>Hamma o’quvchilar</p>
                        <h4>10 ta</h4>
                    </TextBox>
                </HeroChilid>
                <HeroChilid>
                    <img src={Img1} alt="" />
                    <TextBox>
                        <p>Hamma o’quvchilar</p>
                        <h4>54 ta</h4>
                        <p>16% Oylik</p>
                    </TextBox>
                </HeroChilid>
            </Hero>  
            <Box>
            <h3>Hamma O’quvchilar</h3>
            <p>Faol o’quvchilar</p>
            <InputBox>
                <input placeholder='Search' onChange={getSearch} />
                <select placeholder='Short Status:' id="js">
                    <option placeholder='Short Status :' value="name">Name</option>
                </select>
              </InputBox>
            </Box>
            <Form component={false}>
                <AntTable
                    dataSource={info}
                    columns={columns}
                />

            </Form>
        </Container>
    );
};
export default Students;