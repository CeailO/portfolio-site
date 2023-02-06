import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

export default function PageNotFound({}: Props) {
  // router invocations
  const router = useRouter();

  // const handleInput = () => {
  //   router.push("/");
  // };

  // runs after every rendering.
  useEffect(() => {
    router.push("/");
  }, []);
}
