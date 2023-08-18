import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Divider, useDisclosure } from "@nextui-org/react";
import { IoMdSwitch } from 'react-icons/io'
import styles from './modal.module.css'
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { CustomCheckbox } from "../customCheckbox/CustomCheckbox";

export default function SelectModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [groupSelect, setGroupSelect] = useState(["任何"])
    const [bedGroupSelect, setBedGroupSelect] = useState(["任何"])
    const [bathGroupSelect, setBathGroupSelect] = useState(["任何"])

    const btnItems = ["任何", "1", "2", "3", "4", "5", "6", "7", "8+"]
    const typeItems = ["獨棟公寓", "公寓", "待客小屋", "飯店"]

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
                                            type="text"
                                            label="最低"
                                            startContent="$"
                                            defaultValue={320}
                                            variant="bordered"
                                        />
                                        <div className=" flex items-center px-4">—</div>
                                        <Input
                                            type="text"
                                            label="最高"
                                            startContent="$"
                                            defaultValue={6600}
                                            variant="bordered"
                                        />
                                    </div>
                                </div>
                                <Divider className="my-1" />
                                <div className="flex flex-col">
                                    <div className="text-xl ml-1 font-bold">臥室和床鋪</div>
                                    <div className="flex flex-col justify-between">
                                        <div className="p-1">臥室</div>
                                        <CheckboxGroup
                                            classNames={{
                                                wrapper: "p-1 flex-nowrap justify-between",
                                                label: "flex-nowrap"
                                            }}
                                            value={groupSelect}
                                            onChange={(newvalue) => {
                                                setGroupSelect([newvalue[newvalue.length - 1]])
                                            }}
                                            orientation="horizontal">
                                            {btnItems.map((item) => (
                                                <CustomCheckbox value={item}>
                                                    <div className="px-1">
                                                        {item}
                                                    </div>
                                                </CustomCheckbox>
                                            ))}
                                        </CheckboxGroup>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="p-1">床位</div>
                                        <CheckboxGroup
                                            classNames={{
                                                wrapper: "p-1 flex-nowrap justify-between",
                                                label: "flex-nowrap"
                                            }}
                                            value={bedGroupSelect}
                                            onChange={(newvalue) => {
                                                setBedGroupSelect([newvalue[newvalue.length - 1]])
                                            }}
                                            orientation="horizontal">
                                            {btnItems.map((item) => (
                                                <CustomCheckbox value={item}>
                                                    <div className="px-1">
                                                        {item}
                                                    </div>
                                                </CustomCheckbox>
                                            ))}
                                        </CheckboxGroup>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="p-1">衛浴</div>
                                        <CheckboxGroup
                                            classNames={{
                                                wrapper: "p-1 flex-nowrap justify-between",
                                                label: "flex-nowrap"
                                            }}
                                            value={bathGroupSelect}
                                            onChange={(newvalue) => {
                                                setBathGroupSelect([newvalue[newvalue.length - 1]])
                                            }}
                                            orientation="horizontal">
                                            {btnItems.map((item) => (
                                                <CustomCheckbox value={item}>
                                                    <div className="px-1">
                                                        {item}
                                                    </div>
                                                </CustomCheckbox>
                                            ))}
                                        </CheckboxGroup>
                                    </div>
                                </div>
                                <Divider className="my-1" />
                                <div className="flex flex-col">
                                    <div className="text-xl ml-1 font-bold py-3">住宿類型</div>
                                    <div className="flex justify-between mb-2">
                                        {typeItems.map((item) => (
                                            <button className={styles.typeBtn}>{item}</button>
                                        ))}

                                    </div>
                                </div>
                                <Divider className="my-1" />
                                <div>
                                    <div className=" text-xl ml-1 py-3">設備與服務</div>
                                    <div className=" text-xs ml-1 py-2">基本設施</div>
                                    <CheckboxGroup>
                                        <div className="p-1">
                                            <Checkbox classNames={{
                                                base: "px-4"
                                            }}
                                                value="WiFi">WiFi</Checkbox>
                                            <Checkbox value="廚房" classNames={{
                                                base: "ml-2"
                                            }} >廚房</Checkbox>
                                        </div>
                                        <div className="p-1">
                                            <Checkbox classNames={{
                                                base: "px-4"
                                            }} value="洗衣機">洗衣機</Checkbox>
                                            <Checkbox value="空調設備">空調設備</Checkbox>
                                        </div>
                                        <div className="p-1">
                                            <Checkbox classNames={{
                                                base: "px-4"
                                            }} value="電視機">電視機</Checkbox>
                                            <Checkbox value="吹風機">吹風機</Checkbox>
                                        </div>

                                    </CheckboxGroup>
                                </div>




                            </ModalBody>
                            <Divider/>
                            <ModalFooter className="flex justify-between">
                                <Button className="bg-transparent  border-none underline" variant="light" onPress={onClose}>
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