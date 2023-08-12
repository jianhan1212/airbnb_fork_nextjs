"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, Divider } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc"
import { FaSquareFacebook } from "react-icons/fa6"
import { FaApple } from "react-icons/fa"
import { CiMail } from 'react-icons/ci'
import SelectCountry from "../selectCountry/selectCountry";
import React, { useState } from "react";


export default function BasicModal(props) {
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen, onOpenChange } = props
    const [country, setCountry] = useState(new Set(["台灣(+886)"]))
    const selectedValue = React.useMemo(
        () => Array.from(country).join(", ").replaceAll("_", " ").match(/\((\+\d+)\)/)[1],
        [country]
    );



    return (
        <>
            <Modal
                isOpen={isOpen}
                backdrop="opaque"
                size="md"
                onOpenChange={onOpenChange}
                placement="center"
                motionProps={{
                    variants: {
                        enter: {
                            y: -5,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: 0,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            // className="z-auto"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className=" flex flex-col text-center">登入或註冊</ModalHeader>
                            <Divider />
                            <ModalBody>
                                <h1 className="text-xl ml-1">Airbnb 歡迎你</h1>
                                {/* <Input
                                    // autoFocus
                                    label="國家/地區"
                                    variant="bordered"
                                /> */}
                                <SelectCountry
                                    country={country}
                                    setCountry={setCountry}

                                />
                                {console.log(country)}
                                <Input
                                    label="電話號碼"
                                    placeholder={selectedValue}
                                    type="phone"
                                    variant="bordered"
                                />
                                <p className=" text-md">我們會打電話或傳簡訊，以確認你的電話號碼。可能會產生一些一般簡訊或數據傳輸費用。私隱政策</p>
                                <Button color="danger" variant="solid" onClick={onClose} className="color-white">
                                    繼續
                                </Button>
                                <Divider className="my-2" />
                                <Button className="bg-transparent border-solid border-2" onPress={onClose} startContent={<FaSquareFacebook className="text-xl" />} >
                                    繼續使用Facebook登入
                                </Button>
                                <Button className="bg-transparent border-solid border-2" onPress={onClose} startContent={<FcGoogle className="text-xl" />}>
                                    繼續使用Google登入
                                </Button>
                                <Button className="bg-transparent border-solid border-2" onPress={onClose} startContent={<FaApple className="text-xl" />}>
                                    <div>使用Apple帳號登入</div>
                                </Button>
                                <Button className="bg-transparent border-solid border-2" onPress={onClose} startContent={<CiMail className="text-xl" />}>
                                    繼續使用電子郵件地址登入
                                </Button>
                            </ModalBody>
                            {/* <Divider/> */}
                            {/* <ModalFooter className="flex flex-col">
                                
                            </ModalFooter> */}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
