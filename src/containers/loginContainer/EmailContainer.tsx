import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { emailVerifyService } from "../../api/services/signupService";

const EmailContainer = () => {
  let { email, code } = useParams();
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await emailVerifyService({
          email: email || "",
          code: code || "",
        });

        if (response.status === 200) {
          setIsValid(true);
        }
      } catch (error) {}
    })();
  }, []);

  return <>{isValid ? <div>인증 완료</div> : <div>인증 중!!!!!!!!!!!</div>}</>;
};

export default EmailContainer;
