import React from 'react'
import styles from "./close.module.css"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button, Input, Checkbox } from "@nextui-org/react";


const CloseIcon = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary">Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>

                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onClick={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default CloseIcon