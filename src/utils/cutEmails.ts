export const cutEmails = (str: string) => {
  const match = str.match(/^(.*)@/);
  return match ? match[1] : str;
}