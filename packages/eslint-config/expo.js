import { config as reactInternalConfig } from "./react-internal.js";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for Expo projects.
 *
 * @type {import("eslint").Linter.Config}
 */
export const config = [...baseConfig, ...reactInternalConfig];
