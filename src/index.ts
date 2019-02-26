import { Application, Context } from 'probot' // eslint-disable-line no-unused-vars
import { get } from 'lodash';

import { getBountyLink } from './utils/get-bounty-link';
import { BountyBadge } from './utils/bounty-badge';

export = (app: Application) => {
  app.on(['issues.opened', 'issues.edited'], addBadge);
}

async function addBadge(context: Context) {
  const { body } = context.payload.issue;

  const addBadgeOnZero = await shouldAddBadgeOnZero(context);

  const bountyLink = getBountyLink(body, addBadgeOnZero);

  if (!bountyLink || BountyBadge.isBountyBadgeExists(body)) {
    return;
  }

  const newBadge = BountyBadge.generate(bountyLink);

  context.github.issues.update(
    context.issue({
      body: BountyBadge.embedBadge(body, newBadge),
    })
  );
}

function shouldAddBadgeOnZero(context: Context) {
  return context.config('config.yml')
    .then((config) => get(config, 'bountysourceHunterAddBadgeOnZero', false));
}
