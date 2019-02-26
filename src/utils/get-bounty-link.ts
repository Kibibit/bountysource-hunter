export const getBountyLink = (str: string, shouldAddBadgeOnZero: boolean) => {
  const getBountyLinkRegex = /There is a .*?bounty.*?\((.*?)\).* on this issue/m;
  const getBountyLinkZeroRegex = /\[Post a bounty on it!\]\((.*?)\)/m;

  const matches = getBountyLinkRegex.exec(str);
  const matchesZero = getBountyLinkZeroRegex.exec(str);

  return (matches && matches[1]) || (shouldAddBadgeOnZero ? (matchesZero && matchesZero[1]) : null);
};
