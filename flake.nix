{
   description = "Flake for generation of documentation for Cloud Foundry featuring a nix-shell";

   inputs = {
      flake-utils.url = "github:numtide/flake-utils";

      # Choose your nix-branch from <https://github.com/NixOS/nixpkgs/branches>,
      # preferably stable ones!
      nixpkgs-repo.url = github:NixOS/nixpkgs/nixos-unstable;
   };

   outputs = { self, flake-utils, nixpkgs-repo }: flake-utils.lib.eachDefaultSystem (system:
        let
           nixpkgsLib = nixpkgs-repo.lib;
           nixpkgs = nixpkgs-repo.legacyPackages.${system};
        in {
           packages = {
              rubyEnv = nixpkgs.ruby.withPackages (rubyPkgs: with rubyPkgs; [
                 solargraph
              ]);
           };

           devShells = {
              default = nixpkgs.mkShellNoCC {
                 packages = with nixpkgs; [
                    gnumake
                    mdbook
                    self.packages.${system}.rubyEnv # for erb-preprocessing
                 ];
              };
           };
        });
}
