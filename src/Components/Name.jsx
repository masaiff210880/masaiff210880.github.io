import { Text } from "@chakra-ui/react";

const Name = () => {
  return (
    <div id="user-detail-name" style={{display:'flex', columnGap:'5px'}}>
      <Text as="b" fontSize={{ base: "18px", md: "24px", lg: "30px" }} color={"blue.500"} fontFamily={'revert-layer'}>
        RAM
      </Text>
      <Text as="b" fontSize={{ base: "18px", md: "24px", lg: "30px" }} color={"white.500"} fontFamily={'revert-layer'}>
        SURAT
      </Text>
    </div>
  );
};

export default Name;
