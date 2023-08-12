import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Divider, useDisclosure } from "@nextui-org/react";
import { IoMdSwitch } from 'react-icons/io'
import styles from './modal.module.css'
import { useState } from "react";

export default function SelectModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const btnItems = ["任何", "1", "2", "3", "4", "5", "6", "7", "8+"]
    const typeItems = ["獨棟公寓", "公寓", "待客小屋", "飯店"]
    const {value, setValue} = useState("")

    return (
        <>
            <Button
                className='bg-transparent border-solid border-2 px-1 ml-2'
                startContent={<IoMdSwitch />}
                onClick={() => onOpen()}
            >
                篩選條件
            </Button>
            <Modal
                isOpen={isOpen}
                backdrop="opaque"
                size="3xl"
                scrollBehavior="inside"
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
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className=" flex flex-col text-center">篩選條件</ModalHeader>
                            <Divider />
                            <ModalBody>
                                <div className="flex flex-col">
                                    <h1 className="text-xl p-1">價格範圍</h1>
                                    <div className="flex justify-between">
                                        <Input
                                            type="number"
                                            label="最低"
                                            startContent="$"
                                            placeholder="320"
                                            value={value}
                                            variant="bordered"
                                            onValueChange={setValue}
                                        />
                                        <div className=" flex items-center px-4">—</div>
                                        <Input
                                            type="number"
                                            label="最高"
                                            placeholder="6600+"
                                            startContent="$"
                                            value={value}
                                            variant="bordered"
                                        />
                                    </div>
                                </div>
                                <Divider className="my-1" />
                                <div className="flex flex-col">
                                    <div className="text-xl ml-1 font-bold">臥室和床鋪</div>
                                    <div className="flex flex-col justify-between">
                                        <div className="p-1">臥室</div>
                                        <div className="full inline-flex items-center justify-between">
                                            {btnItems.map((item) => (
                                                <Button radius="full" size="sm" variant="ghost" className="bg-transparent border-solid border-2">{item}</Button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="p-1">床位</div>
                                        <div className="inline-flex full items-center justify-between">
                                            {btnItems.map((item) => (
                                                <Button radius="full" size="sm" variant="ghost" className="bg-transparent border-solid border-2">{item}</Button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="p-1">衛浴</div>
                                        <div className="full inline-flex items-center justify-between" >
                                            {btnItems.map((item) => (
                                                <Button radius="full" size="sm" variant="ghost" className="bg-transparent border-solid border-2">{item}</Button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <Divider className="my-1" />
                                <div className="flex flex-col">
                                    <div className="text-xl ml-1 font-bold">住宿類型</div>
                                    <div className="flex justify-between mb-2">
                                        {typeItems.map((item)=>(
                                           <button className={styles.typeBtn}>{item}</button> 
                                        ))}
                                        
                                        
                                        
                                    </div>
                                <Divider className="my-1" />


                                </div>

                            </ModalBody>
                            {/* <Divider/> */}
                            <ModalFooter className="flex justify-between">
                                <Button className="bg-transparent border-none" onPress={onClose}>
                                    清除全部
                                </Button>

                                <Button className="border-solid border-2" color="default" onPress={onClose}>
                                    顯示?間房源
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}