export default async function (Drupal) {
  if (!Drupal || !Drupal.behaviors) return;

  Drupal.behaviors.commonTweaks = await import('./common-tweaks')
  Drupal.behaviors.groupMenuNavigation = await import('./group-menu-navigation');
  Drupal.behaviors.utilityMenu = await import('./utility-menu');
}