const getBountyLinkRegex = /There is a .*?bounty.*?\((.*?)\).* on this issue/m;


export const getBountyLink = (str: string) => {
  const matches = getBountyLinkRegex.exec(str);

  return matches && matches[1];
};
