import React, { useEffect, useRef, useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { SubEvent } from "./SubEvent";
import { customSubmit } from "@/utils/login/customSubmit";
import { customValidator } from "@/utils/login/customValidator";
import ModalLayout from "@/components/ui/layout/ModalLayout";
import { useAuthContext } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";

export function RegBuyer({ handleClose }: { handleClose: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);
  const formRef = useRef(null);
  const { setAuth } = useAuthContext();

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setAuth("buyer");
      redirect("/profile/buyer");
    }
  }, [isSuccess]);

  return (
    <ModalLayout onClose={handleClose}>
      <h2 className='text-4xl text-orange-main font-bold mb-4'>Регистрация</h2>
      <Form
        ref={formRef}
        className=' flex flex-col items-center gap-4'
        validationBehavior='native'
        onSubmit={(e) =>
          customSubmit(e, formRef, setIsSuccess, "registration/buyer", setIsLoading)
        }>
        <Input
          isRequired
          errorMessage='Укажите верную почту'
          placeholder='Укажите почту'
          type='email'
          name='email'
          size='lg'
          variant='bordered'
          radius='sm'
        />
        <Input
          isRequired
          validate={customValidator}
          placeholder='Укажите пароль'
          type='password'
          name='password'
          size='lg'
          variant='bordered'
          radius='sm'
        />
        <Button
          isLoading={isLoading}
          type='submit'
          className='bg-[#F35935] rounded-[5px] pl-3 pr-3 w-[340px] h-[58px] font-medium text-white text-lg shadow-normal active:translate-y-1'>
          Начать регистрацию
        </Button>
      </Form>
      <SubEvent
        isSuccess={isSuccess}
        textFalse={"Упс!.. такая почта уже занята"}
        textTrue={"Регистрация успешна!"}
      />
    </ModalLayout>
  );
}
