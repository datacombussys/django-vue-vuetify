<template>
  <div class="reset-this">
    <div class="main-nav bg-primary">
      <div class="sidebar-header">
        <h3>My SIDEBAR</h3>
      </div>
      <div class="bg-primary nav-menu-list">
        <p class="text-white">Welcome First-name</p>
        <b-menu>
            <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Info"></b-menu-item>
                <b-menu-item
                    icon="settings"
                    :active="isActive"
                    :expanded="isActive"
                    @click="isActive = !isActive">
                    <template slot="label" slot-scope="props">
                        Administrator
                        <b-icon
                            class="is-pulled-right"
                            :icon="props.expanded ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </template>
                    <b-menu-item icon="account" label="Users"></b-menu-item>
                    <b-menu-item icon="cellphone-link">
                        <template slot="label" slot-scope="props">
                            Devices
                            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                            <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                                <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                                <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                            </b-dropdown>
                        </template>
                    </b-menu-item>
                    <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
                </b-menu-item>
                <b-menu-item icon="account" label="My Account">
                    <b-menu-item label="Account data"></b-menu-item>
                    <b-menu-item label="Addresses"></b-menu-item>
                </b-menu-item>
            </b-menu-list>
            <b-menu-list>
                <b-menu-item
                    label="Expo"
                    icon="link"
                    tag="router-link"
                    target="_blank"
                    to="/expo">
                </b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
                <b-menu-item label="Logout"></b-menu-item>
            </b-menu-list>
        </b-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_main/main-grid-styling.scss";
@import "../assets/scss/_main/main-grid.scss";
</style>