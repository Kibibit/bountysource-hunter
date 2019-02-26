export const getBountyLink = (str: string, shouldAddBadgeOnZero: boolean) => {
  const getBountyLinkMatcher = 'There is a .*?bounty.*?\\((.*?)\\).* on this issue';
  const getBountyLinkZeroMatcher = shouldAddBadgeOnZero ?
    '|' + '\\[Post a bounty on it!\\]\\((.*\\))' : '';

  const getBountyLinkRegex = new RegExp(`${getBountyLinkMatcher}${getBountyLinkZeroMatcher}`, 'm');

  const matches = getBountyLinkRegex.exec(str);

  return matches && matches[1];
};
