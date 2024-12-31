#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CodepipelineBuildDeployStack } from '../lib/codepipeline-build-deploy-stack';
import { config } from 'dotenv';

config();

const app = new cdk.App();
new CodepipelineBuildDeployStack(app, 'CodepipelineBuildDeployStack', {
  owner: process.env.github_owner || '',
  repo: process.env.github_repo || '',
  branch: process.env.github_branch || 'main',
  oauthToken: process.env.github_oauth_token || '',
});
