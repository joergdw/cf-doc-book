// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/contribute.html"><strong aria-hidden="true">1.</strong> Contribute to Cloud Foundry documentation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/index.html"><strong aria-hidden="true">2.</strong> Cloud Foundry concepts</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/overview.html"><strong aria-hidden="true">2.1.</strong> Cloud Foundry overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/security-index.html"><strong aria-hidden="true">2.2.</strong> Security and networking</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/security.html"><strong aria-hidden="true">2.2.1.</strong> Cloud Foundry security</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/container-security.html"><strong aria-hidden="true">2.2.2.</strong> Container security in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/understand-cf-networking.html"><strong aria-hidden="true">2.2.3.</strong> Container-to-container networking</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/identity-aware-routing.html"><strong aria-hidden="true">2.2.4.</strong> Identity-aware routing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/roles.html"><strong aria-hidden="true">2.2.5.</strong> Orgs, spaces, roles, and permissions in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/managing-roles.html"><strong aria-hidden="true">2.2.6.</strong> Managing Roles</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/orgs-and-spaces.html"><strong aria-hidden="true">2.2.7.</strong> Planning orgs and spaces in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/asg.html"><strong aria-hidden="true">2.2.8.</strong> App Security Groups in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/diego/ssh-conceptual.html"><strong aria-hidden="true">2.2.9.</strong> Cloud Foundry app SSH components and processes</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/ha-index.html"><strong aria-hidden="true">2.3.</strong> High availability</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/high-availability.html"><strong aria-hidden="true">2.3.1.</strong> High availability in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/maintaining-high-availability.html"><strong aria-hidden="true">2.3.2.</strong> How Cloud Foundry maintains high availability</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/apps-index.html"><strong aria-hidden="true">2.4.</strong> How Cloud Foundry manages apps</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/how-applications-are-staged.html"><strong aria-hidden="true">2.4.1.</strong> Staging your apps in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/app-lifecycle.html"><strong aria-hidden="true">2.4.2.</strong> The app container lifecycle on Diego architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/diego/diego-auction.html"><strong aria-hidden="true">2.4.3.</strong> How Diego balances app processes in Cloud Foundry</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/architecture/index.html"><strong aria-hidden="true">2.5.</strong> Cloud Foundry components</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/diego/diego-architecture.html"><strong aria-hidden="true">2.5.1.</strong> Diego components and architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/cf-routing-architecture.html"><strong aria-hidden="true">2.5.2.</strong> Cloud Foundry routing architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/architecture/cloud-controller.html"><strong aria-hidden="true">2.5.3.</strong> Cloud Controller</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/cc-blobstore.html"><strong aria-hidden="true">2.5.4.</strong> Cloud Controller blobstore</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/architecture/uaa.html"><strong aria-hidden="true">2.5.5.</strong> User Account and Authentication server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/architecture/garden.html"><strong aria-hidden="true">2.5.6.</strong> Garden component</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/grootfs-disk.html"><strong aria-hidden="true">2.5.7.</strong> GrootFS disk usage in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="concepts/http-routing.html"><strong aria-hidden="true">2.5.8.</strong> HTTP routing</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="group-1.html"><strong aria-hidden="true">3.</strong> Cloud Foundry Command Line Interface (cf CLI)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cf-cli/install-go-cli.html"><strong aria-hidden="true">3.1.</strong> Installing the cf CLI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cf-cli/v8.html"><strong aria-hidden="true">3.2.</strong> Upgrading to cf CLI v8</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cf-cli/getting-started.html"><strong aria-hidden="true">3.3.</strong> Getting started with the cf CLI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cf-cli/http-proxy.html"><strong aria-hidden="true">3.4.</strong> Using the cf CLI with a proxy server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cf-cli/self-signed.html"><strong aria-hidden="true">3.5.</strong> Using the cf CLI with a self-signed certificate</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cf-cli/use-cli-plugins.html"><strong aria-hidden="true">3.6.</strong> Using cf CLI plug-ins</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cf-cli/develop-cli-plugins.html"><strong aria-hidden="true">3.7.</strong> Developing cf CLI plug-ins</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="deploying/index.html"><strong aria-hidden="true">4.</strong> Deploying Cloud Foundry</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="deploying/common/dns_prereqs.html"><strong aria-hidden="true">4.1.</strong> Setting up DNS for your environment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="deploying/cf-deployment/index.html"><strong aria-hidden="true">4.2.</strong> Deploying Cloud Foundry with cf-deployment</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="deploying/common/aws.html"><strong aria-hidden="true">4.2.1.</strong> Deploying BOSH on AWS</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="deploying/cf-deployment/gcp.html"><strong aria-hidden="true">4.2.2.</strong> Deploying BOSH on GCP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="deploying/cf-deployment/deploy-cf.html"><strong aria-hidden="true">4.2.3.</strong> Deploying Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="deploying/cf-deployment/enable-identity-aware-routing.html"><strong aria-hidden="true">4.2.4.</strong> Enabling identity-aware routing</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/index.html"><strong aria-hidden="true">4.3.</strong> Backing up and restoring with BBR</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="group-2.html"><strong aria-hidden="true">4.4.</strong> Additional configuration</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="deploying/common/cc-blobstore-config.html"><strong aria-hidden="true">4.4.1.</strong> Cloud Controller blobstore configuration</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/index.html"><strong aria-hidden="true">5.</strong> Administering Cloud Foundry</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/platform-index.html"><strong aria-hidden="true">5.1.</strong> Managing the runtime</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/start-stop-vms.html"><strong aria-hidden="true">5.1.1.</strong> Stopping and starting virtual machines</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/quota-plans.html"><strong aria-hidden="true">5.1.2.</strong> Creating and modifying quota plans</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/listing-feature-flags.html"><strong aria-hidden="true">5.1.3.</strong> Using feature flags</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/examining_grootfs_disk.html"><strong aria-hidden="true">5.1.4.</strong> Examining GrootFS disk usage</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/metadata.html"><strong aria-hidden="true">5.1.5.</strong> Using metadata</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/buildpacks.html"><strong aria-hidden="true">5.1.6.</strong> Managing custom buildpacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/docker.html"><strong aria-hidden="true">5.1.7.</strong> Using Docker in Cloud Foundry</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/user-accounts-index.html"><strong aria-hidden="true">5.2.</strong> User accounts and communications</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/cli-user-management.html"><strong aria-hidden="true">5.2.1.</strong> Creating and managing users with the cf CLI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uaa/uaa-user-management.html"><strong aria-hidden="true">5.2.2.</strong> Creating and managing users with the UAA CLI (UAAC)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/notifications.html"><strong aria-hidden="true">5.2.3.</strong> Get started with the Notifications Service</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/routing-index.html"><strong aria-hidden="true">5.3.</strong> Routing</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/enabling_ipv6.html"><strong aria-hidden="true">5.3.1.</strong> Enabling IPv6 for hosted apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/distributed-tracing.html"><strong aria-hidden="true">5.3.2.</strong> Distributed tracing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/zipkin_tracing.html"><strong aria-hidden="true">5.3.3.</strong> Enabling Zipkin tracing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/w3c_tracing.html"><strong aria-hidden="true">5.3.4.</strong> Enabling W3C tracing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/supporting-websockets.html"><strong aria-hidden="true">5.3.5.</strong> Supporting WebSockets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/configure-lb-healthcheck.html"><strong aria-hidden="true">5.3.6.</strong> Configuring load balancer health checks for CF routers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/troubleshooting_slow_requests.html"><strong aria-hidden="true">5.3.7.</strong> Troubleshooting slow requests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/troubleshooting-router-error-responses.html"><strong aria-hidden="true">5.3.8.</strong> Troubleshooting router error responses</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/securing-traffic.html"><strong aria-hidden="true">5.3.9.</strong> Securing incoming traffic</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/trusted-system-certificates.html"><strong aria-hidden="true">5.3.10.</strong> Configuring trusted system certificates for apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/bbs-encryption-keys.html"><strong aria-hidden="true">5.3.11.</strong> Bulletin Board System data store encryption</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/enabling-tcp-routing.html"><strong aria-hidden="true">5.3.12.</strong> Enabling and configuring TCP routing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/supporting-http2.html"><strong aria-hidden="true">5.3.13.</strong> Configuring HTTP/2 support</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/isolation-segment-index.html"><strong aria-hidden="true">5.4.</strong> Isolation segments</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/isolation-segments.html"><strong aria-hidden="true">5.4.1.</strong> Managing isolation segments</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/routing-is.html"><strong aria-hidden="true">5.4.2.</strong> Routing for isolation segments</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/delayed-jobs-index.html"><strong aria-hidden="true">5.5.</strong> Delayed jobs in Cloud Foundry</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/configuring-delayed-job-priorities.html"><strong aria-hidden="true">5.5.1.</strong> Configuring delayed job priorities with Cloud Controller</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/managing-apps-stacks-index.html"><strong aria-hidden="true">5.6.</strong> Managing apps and their stacks</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/stack-auditor.html"><strong aria-hidden="true">5.6.1.</strong> Using Stack Auditor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/managing-stacks.html"><strong aria-hidden="true">5.6.2.</strong> Managing stack lifecycle</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/stacks.html"><strong aria-hidden="true">5.6.3.</strong> Changing stacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/windows-stacks.html"><strong aria-hidden="true">5.6.4.</strong> Restaging your apps on a Windows stack</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/index.html"><strong aria-hidden="true">6.</strong> Running and Troubleshooting Cloud Foundry</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/logging.html"><strong aria-hidden="true">6.1.</strong> Cloud Foundry logging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/logging-config.html"><strong aria-hidden="true">6.2.</strong> Configuring system logging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/diego-upgrades.html"><strong aria-hidden="true">6.3.</strong> Configuring Diego for upgrades</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/audit-events.html"><strong aria-hidden="true">6.4.</strong> Audit Events</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/uaa-audit-requirements.html"><strong aria-hidden="true">6.5.</strong> UAA audit requirements</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/usage-events.html"><strong aria-hidden="true">6.6.</strong> Usage events and billing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/config-ssh.html"><strong aria-hidden="true">6.7.</strong> Configuring SSH access for Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/config-cell-cleanup.html"><strong aria-hidden="true">6.8.</strong> Configuring Diego Cell disk cleanup scheduling</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/hm-notifications.html"><strong aria-hidden="true">6.9.</strong> Configuring Health Monitor Notifications</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/custom-stack.html"><strong aria-hidden="true">6.10.</strong> Adding a custom stack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/monitoring-test.html"><strong aria-hidden="true">6.11.</strong> Monitoring and testing Diego components</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/troubleshooting.html"><strong aria-hidden="true">6.12.</strong> Troubleshooting Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/uaa-performance.html"><strong aria-hidden="true">6.13.</strong> UAA performance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uaa/uaa-metrics.html"><strong aria-hidden="true">6.14.</strong> UAA performance metrics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/scaling-cloud-controller.html"><strong aria-hidden="true">6.15.</strong> Scaling Cloud Controller</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/multi-process-cloud-controller.html"><strong aria-hidden="true">6.16.</strong> Cloud Controller Multi-Process Mode (Puma)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/scaling-cloud-controller-k8s.html"><strong aria-hidden="true">6.17.</strong> Scaling Cloud Controller (cf-for-k8s)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="group-3.html"><strong aria-hidden="true">7.</strong> Logging and metrics in Cloud Foundry</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/architecture.html"><strong aria-hidden="true">7.1.</strong> Logging and metrics architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/cli-plugin.html"><strong aria-hidden="true">7.2.</strong> Installing the Loggregator plug-in for cf CLI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/cc-uaa-logging.html"><strong aria-hidden="true">7.3.</strong> Security event logging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/streaming-logs.html"><strong aria-hidden="true">7.4.</strong> App logging in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/app-log-rate-limits.html"><strong aria-hidden="true">7.5.</strong> Limiting your app log rate in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/all_metrics.html"><strong aria-hidden="true">7.6.</strong> Cloud Foundry component metrics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/container-metrics.html"><strong aria-hidden="true">7.7.</strong> Container metrics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/log-ops-guide.html"><strong aria-hidden="true">7.8.</strong> Loggregator guide for Cloud Foundry operators</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/data-sources.html"><strong aria-hidden="true">7.9.</strong> Logging and metrics in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/opentelemetry.html"><strong aria-hidden="true">7.10.</strong> Configuring the OpenTelemetry Collector</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="loggregator/nozzle-tutorial.html"><strong aria-hidden="true">7.11.</strong> Deploying a nozzle to your Cloud Foundry Loggregator Firehose</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="group-4.html"><strong aria-hidden="true">8.</strong> BOSH Backup and Restore (BBR)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/installing.html"><strong aria-hidden="true">8.1.</strong> Installing BBR</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/backup.html"><strong aria-hidden="true">8.2.</strong> Backing up with BBR</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/restore.html"><strong aria-hidden="true">8.3.</strong> Restoring with BBR</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/cf-backup.html"><strong aria-hidden="true">8.4.</strong> Configuring Cloud Foundry for BOSH Backup and Restore</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/external-blobstores.html"><strong aria-hidden="true">8.5.</strong> Backup and restore for external blobstores</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/logging.html"><strong aria-hidden="true">8.6.</strong> BBR logging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/experimental-features.html"><strong aria-hidden="true">8.7.</strong> Advanced features</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bbr/bbr-devguide.html"><strong aria-hidden="true">8.8.</strong> BBR developer&#39;s guide</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/index.html"><strong aria-hidden="true">9.</strong> Developing and managing apps</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/push.html"><strong aria-hidden="true">9.1.</strong> How to push your app with Cloud Foundry CLI (cf push)</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/deploy-app.html"><strong aria-hidden="true">9.1.1.</strong> Pushing your app using Cloud Foundry CLI (cf push)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/manifest.html"><strong aria-hidden="true">9.1.2.</strong> Deploying with app manifests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/manifest-attributes.html"><strong aria-hidden="true">9.1.3.</strong> App manifest attribute reference</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/push-docker.html"><strong aria-hidden="true">9.1.4.</strong> Deploying an app with Docker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/large-app-deploy.html"><strong aria-hidden="true">9.1.5.</strong> Deploying your large apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/start-restart-restage.html"><strong aria-hidden="true">9.1.6.</strong> Starting, restarting, and restaging apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/multiple-processes.html"><strong aria-hidden="true">9.1.7.</strong> Pushing an app with multiple processes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/push-sub-commands.html"><strong aria-hidden="true">9.1.8.</strong> Running cf push sub-step commands</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/rolling-deploy.html"><strong aria-hidden="true">9.1.9.</strong> Configuring app deployments</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/sidecars.html"><strong aria-hidden="true">9.1.10.</strong> Pushing apps with sidecar processes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/blue-green.html"><strong aria-hidden="true">9.1.11.</strong> Using blue-green deployment to reduce downtime</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/troubleshoot-app-health.html"><strong aria-hidden="true">9.1.12.</strong> Troubleshooting app deployment and health</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/ssh-index.html"><strong aria-hidden="true">9.2.</strong> SSH for apps and services</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/app-ssh-overview.html"><strong aria-hidden="true">9.2.1.</strong> Configuring SSH access for your deployment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/ssh-apps.html"><strong aria-hidden="true">9.2.2.</strong> Accessing your apps with SSH</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/ssh-services.html"><strong aria-hidden="true">9.2.3.</strong> Accessing services with SSH</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/routing-index.html"><strong aria-hidden="true">9.3.</strong> Routes and domains</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/routes-domains.html"><strong aria-hidden="true">9.3.1.</strong> Configuring routes and domains</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/custom-per-route-options.html"><strong aria-hidden="true">9.3.2.</strong> Configuring per-route options</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/identity-aware-routing.html"><strong aria-hidden="true">9.3.3.</strong> Configuring identity-aware routing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/hash-based-routing.html"><strong aria-hidden="true">9.3.4.</strong> Hash-Based Routing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/custom-ports.html"><strong aria-hidden="true">9.3.5.</strong> Configuring CF to route traffic to apps on custom ports</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/http2-protocol.html"><strong aria-hidden="true">9.3.6.</strong> Routing HTTP/2 and gRPC traffic to apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="adminguide/troubleshooting_tcp_routing.html"><strong aria-hidden="true">9.3.7.</strong> Troubleshooting TCP routing</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services-index.html"><strong aria-hidden="true">9.4.</strong> Managing services</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/index.html"><strong aria-hidden="true">9.4.1.</strong> Provisioning and integrating service instances</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/managing-services.html"><strong aria-hidden="true">9.4.2.</strong> Managing service instances</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/sharing-instances.html"><strong aria-hidden="true">9.4.3.</strong> Sharing service instances</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/application-binding.html"><strong aria-hidden="true">9.4.4.</strong> Delivering service credentials to an app</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/service-keys.html"><strong aria-hidden="true">9.4.5.</strong> Managing service keys</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/play-service-bindings.html"><strong aria-hidden="true">9.4.6.</strong> Configuring Play Framework service connections</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/using-vol-services.html"><strong aria-hidden="true">9.4.7.</strong> Using an external file system (volume services)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/user-provided.html"><strong aria-hidden="true">9.4.8.</strong> User-provided service instances</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/route-binding.html"><strong aria-hidden="true">9.4.9.</strong> Manage app requests with route services</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/streaming-logs-index.html"><strong aria-hidden="true">9.5.</strong> Streaming app logs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/log-management.html"><strong aria-hidden="true">9.5.1.</strong> Streaming app logs to log management services</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/log-management-thirdparty-svc.html"><strong aria-hidden="true">9.5.2.</strong> Streaming app logs to third-party services</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/integrate-splunk.html"><strong aria-hidden="true">9.5.3.</strong> Streaming app logs to Splunk</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/fluentd.html"><strong aria-hidden="true">9.5.4.</strong> Streaming app logs with Fluentd</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/oms-nozzle.html"><strong aria-hidden="true">9.5.5.</strong> Streaming app logs to Azure OMS log analytics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/services/metrics.html"><strong aria-hidden="true">9.5.6.</strong> Using metrics with drain logs</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/managing-apps-index.html"><strong aria-hidden="true">9.6.</strong> Managing apps with the cf CLI</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/using-tasks.html"><strong aria-hidden="true">9.6.1.</strong> Running tasks in your apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/cf-scale.html"><strong aria-hidden="true">9.6.2.</strong> Scaling your app using Cloud Foundry CLI (cf scale)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/healthchecks.html"><strong aria-hidden="true">9.6.3.</strong> Using Cloud Foundry health checks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/managing-cf/app-event.html"><strong aria-hidden="true">9.6.4.</strong> Retrieving app and event information</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/cf-networking.html"><strong aria-hidden="true">9.6.5.</strong> Configuring container-to-Container networking</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/environment-variable.html"><strong aria-hidden="true">9.7.</strong> Cloud Foundry environment variables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/capi/client-libraries.html"><strong aria-hidden="true">9.8.</strong> Available Cloud Controller API client libraries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/deploy-apps/prepare-to-deploy.html"><strong aria-hidden="true">9.9.</strong> Designing and running your app in the cloud</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="devguide/revisions.html"><strong aria-hidden="true">9.10.</strong> Cloud Foundry API app revisions</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/index.html"><strong aria-hidden="true">10.</strong> Cloud Foundry Buildpacks</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/cnb/index.html"><strong aria-hidden="true">10.1.</strong> Cloud Native Buildpacks</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/cnb/paketo.html"><strong aria-hidden="true">10.1.1.</strong> Paketo Buildpacks</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/classic.html"><strong aria-hidden="true">10.2.</strong> Classic Buildpacks</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/using-buildpacks.html"><strong aria-hidden="true">10.2.1.</strong> What are classic buildpacks?</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/understand-buildpacks.html"><strong aria-hidden="true">10.2.1.1.</strong> Working with buildpacks in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/stack-association.html"><strong aria-hidden="true">10.2.1.2.</strong> Stack association</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/use-multiple-buildpacks.html"><strong aria-hidden="true">10.2.1.3.</strong> Pushing an app with multiple buildpacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/proxy-usage.html"><strong aria-hidden="true">10.2.1.4.</strong> Using a proxy server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/supported-binary-dependencies.html"><strong aria-hidden="true">10.2.1.5.</strong> Supported binary dependencies</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/prod-server.html"><strong aria-hidden="true">10.2.1.6.</strong> Configuring the production server</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/binary/index.html"><strong aria-hidden="true">10.2.2.</strong> Binary buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/go/index.html"><strong aria-hidden="true">10.2.3.</strong> Go buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/hwc/index.html"><strong aria-hidden="true">10.2.4.</strong> Hosted Web Core buildpack</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/hwc/extension-buildpack.html"><strong aria-hidden="true">10.2.4.1.</strong> Creating an extension buildpack for .NET apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/hwc/web-config-transform-buildpack.html"><strong aria-hidden="true">10.2.4.2.</strong> Using the .NET Framework Web Config Transform Extension Buildpack</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/index.html"><strong aria-hidden="true">10.2.5.</strong> Java buildpack</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/java-tips.html"><strong aria-hidden="true">10.2.5.1.</strong> Using Cloud Foundry Java buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/getting-started-deploying-apps/index.html"><strong aria-hidden="true">10.2.5.2.</strong> Getting started deploying Java apps to Cloud Foundry</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/getting-started-deploying-apps/gsg-grails.html"><strong aria-hidden="true">10.2.5.2.1.</strong> Getting started deploying your Grails apps to Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/getting-started-deploying-apps/gsg-ratpack.html"><strong aria-hidden="true">10.2.5.2.2.</strong> Getting started deploying Ratpack apps to Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/getting-started-deploying-apps/gsg-spring.html"><strong aria-hidden="true">10.2.5.2.3.</strong> Getting started deploying Spring apps to Cloud Foundry</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/configuring-service-connections.html"><strong aria-hidden="true">10.2.5.3.</strong> Configuring service connections</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/java-native-image.html"><strong aria-hidden="true">10.2.5.4.</strong> Using Java Native Image</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/java/java-client.html"><strong aria-hidden="true">10.2.5.5.</strong> Cloud Foundry Java Client Library</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/dotnet-core/index.html"><strong aria-hidden="true">10.2.6.</strong> .NET Core buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/nginx/index.html"><strong aria-hidden="true">10.2.7.</strong> NGINX buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/node/index.html"><strong aria-hidden="true">10.2.8.</strong> Node.js buildpack</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/node/node-tips.html"><strong aria-hidden="true">10.2.8.1.</strong> Node.js buildpack-specific information</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/node/node-environment.html"><strong aria-hidden="true">10.2.8.2.</strong> Environment variables defined by Node buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/node/node-service-bindings.html"><strong aria-hidden="true">10.2.8.3.</strong> Configuring service connections for Node.js application</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/php/index.html"><strong aria-hidden="true">10.2.9.</strong> Using PHP buildpack with runtimes</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/php/gsg-php-tips.html"><strong aria-hidden="true">10.2.9.1.</strong> Additional information on PHP buildpacks in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/php/gsg-php-usage.html"><strong aria-hidden="true">10.2.9.2.</strong> Getting started deploying PHP apps to Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/php/gsg-php-config.html"><strong aria-hidden="true">10.2.9.3.</strong> PHP buildpack configuration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/php/gsg-php-composer.html"><strong aria-hidden="true">10.2.9.4.</strong> Composer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/php/gsg-php-sessions.html"><strong aria-hidden="true">10.2.9.5.</strong> Sessions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/php/gsg-php-newrelic.html"><strong aria-hidden="true">10.2.9.6.</strong> New Relic</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/python/index.html"><strong aria-hidden="true">10.2.10.</strong> Python buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/r/index.html"><strong aria-hidden="true">10.2.11.</strong> R buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/index.html"><strong aria-hidden="true">10.2.12.</strong> Ruby buildpack</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/ruby-tips.html"><strong aria-hidden="true">10.2.12.1.</strong> Additional information on Ruby buildpacks in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/deploying-apps-index.html"><strong aria-hidden="true">10.2.12.2.</strong> Getting started deploying Ruby apps</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/gsg-ruby.html"><strong aria-hidden="true">10.2.12.2.1.</strong> Getting started deploying Ruby apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/gsg-ror.html"><strong aria-hidden="true">10.2.12.2.2.</strong> Getting started deploying Ruby on Rails apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/sample-ror.html"><strong aria-hidden="true">10.2.12.2.3.</strong> Deploy a sample Ruby on Rails app</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/rake-config.html"><strong aria-hidden="true">10.2.12.3.</strong> Configuring Rake tasks for deployed apps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/ruby-environment.html"><strong aria-hidden="true">10.2.12.4.</strong> Environment variables defined by Ruby buildpack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/ruby-service-bindings.html"><strong aria-hidden="true">10.2.12.5.</strong> Configuring service connections for Ruby</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/ruby/windows.html"><strong aria-hidden="true">10.2.12.6.</strong> Windows Gemfile support</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/staticfile/index.html"><strong aria-hidden="true">10.2.13.</strong> Staticfile buildpacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/custom.html"><strong aria-hidden="true">10.2.14.</strong> Creating custom buildpacks</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/depend-pkg-offline.html"><strong aria-hidden="true">10.2.14.1.</strong> Packaging dependencies for offline buildpacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/merging_upstream.html"><strong aria-hidden="true">10.2.14.2.</strong> Merging from upstream buildpacks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/upgrading_dependency_versions.html"><strong aria-hidden="true">10.2.14.3.</strong> Upgrading dependency versions for Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/buildpack-ci-index.html"><strong aria-hidden="true">10.2.14.4.</strong> Using CI for buildpacks</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/releasing_a_new_buildpack_version.html"><strong aria-hidden="true">10.2.14.4.1.</strong> Releasing a new Cloud Foundry buildpack version</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="buildpacks/updating-buildpack-related-gems.html"><strong aria-hidden="true">10.2.14.4.2.</strong> Updating buildpack-related gems in Cloud Foundry</a></span></li></ol></li></ol></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="group-5.html"><strong aria-hidden="true">11.</strong> Information for Managed Service Authors</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/overview.html"><strong aria-hidden="true">11.1.</strong> Services in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="group-6.html"><strong aria-hidden="true">11.2.</strong> Service Broker API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/managing-service-brokers.html"><strong aria-hidden="true">11.3.</strong> Managing service brokers in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/access-control.html"><strong aria-hidden="true">11.4.</strong> Managing access to service plans</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/binding-credentials.html"><strong aria-hidden="true">11.5.</strong> Binding credentials in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credhub/index.html"><strong aria-hidden="true">11.6.</strong> CredHub</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credhub/setup-credhub-bosh.html"><strong aria-hidden="true">11.6.1.</strong> Setting up and deploying CredHub with BOSH</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credhub/hsm-config.html"><strong aria-hidden="true">11.6.2.</strong> Configuring a hardware security module</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credhub/kms-plugin.html"><strong aria-hidden="true">11.6.3.</strong> Using a key management service with CredHub</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credhub/credential-types.html"><strong aria-hidden="true">11.6.4.</strong> CredHub credential types</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credhub/backup-restore.html"><strong aria-hidden="true">11.6.5.</strong> Backing up and restoring CredHub instances</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="credhub/troubleshooting-credhub.html"><strong aria-hidden="true">11.6.6.</strong> Troubleshooting CredHub</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/dashboard-sso.html"><strong aria-hidden="true">11.7.</strong> Dashboard Single Sign-on</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/enable-sharing.html"><strong aria-hidden="true">11.8.</strong> Service instance sharing in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/examples.html"><strong aria-hidden="true">11.9.</strong> Service broker examples</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/app-log-streaming.html"><strong aria-hidden="true">11.10.</strong> App log streaming in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/route-services.html"><strong aria-hidden="true">11.11.</strong> Offering Route Services in Cloud Foundry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="services/supporting-multiple-cf-instances.html"><strong aria-hidden="true">11.12.</strong> Supporting multiple CF instances</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="group-7.html"><strong aria-hidden="true">12.</strong> User Account and Authentication</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uaa/uaa-overview.html"><strong aria-hidden="true">12.1.</strong> UAA Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uaa/uaa-concepts.html"><strong aria-hidden="true">12.2.</strong> UAA Concepts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uaa/identity-providers.html"><strong aria-hidden="true">12.3.</strong> Identity Providers in UAA</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="group-8.html"><strong aria-hidden="true">13.</strong> CAPI API</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="running/rate-limit-cloud-controller-api.html"><strong aria-hidden="true">13.1.</strong> Rate limit information returned by the Cloud Controller API</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

