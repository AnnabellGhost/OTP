/*Created by Zhang Xingping on20170508*/
export const isRequired=name=>`${name} is required.`;
export const lengthMustBe=length=>{
    return (name)=>`${name} must be ${length} digits.`;
};